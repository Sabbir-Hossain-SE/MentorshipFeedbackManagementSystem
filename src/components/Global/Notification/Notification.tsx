import { Snackbar as MuiSnackbar, Stack } from "@mui/material";
import { useNotification } from "./NotificationProvider";
import NotificationStack from "./NotificationStack";

const Notification: React.FC = () => {
    const { notificationPack } = useNotification();

    const firstToast = notificationPack[0];

    return (
        <MuiSnackbar
            open={!!firstToast}
            autoHideDuration={null}
            transitionDuration={0}
            anchorOrigin={{
                vertical: firstToast?.position?.vertical || "bottom",
                horizontal: firstToast?.position?.horizontal || "right"
            }}
            sx={{
                mt: "env(safe-area-inset-top)",
                mb: "env(safe-area-inset-bottom)"
            }}
        >
            <Stack flexDirection="column" gap={1}>
                {notificationPack.map((notification) => (
                    <NotificationStack key={notification.key} notification={notification} />
                ))}
            </Stack>
        </MuiSnackbar>
    );
};

export default Notification;
