import { useState, useEffect, useCallback } from "react";
import { Alert, AlertTitle, Grow } from "@mui/material";
import { useNotification, NotificationProps } from "./NotificationProvider";

type NotificationStackProps = {
    notification: NotificationProps;
};

const TIMEOUT = 300;

const NotificationStack: React.FC<NotificationStackProps> = ({ notification }) => {
    const [open, setOpen] = useState(true);
    const { removeNotification } = useNotification();

    const close = useCallback(() => {
        setOpen(false);
        setTimeout(() => {
            removeNotification(notification.key);
        }, TIMEOUT);
    }, [notification.key, removeNotification]);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        console.log(event);

        if (reason === "clickaway") {
            return;
        }
        if (notification?.onClose) {
            notification.onClose();
        }
        close();
    };

    useEffect(() => {
        if (notification.duration !== 0) {
            setTimeout(() => {
                close();
            }, notification.duration || 6000);
        }
    }, [close, notification.duration]);

    return (
        <Grow in={open} timeout={TIMEOUT}>
            <Alert
                key={notification.key}
                severity={notification?.type || "info"}
                onClose={handleClose}
                variant={notification?.variant || "filled"}
            >
                {notification?.title && <AlertTitle>{notification.title}</AlertTitle>}
                {notification?.message}
                {notification?.children}
            </Alert>
        </Grow>
    );
};

export default NotificationStack;
