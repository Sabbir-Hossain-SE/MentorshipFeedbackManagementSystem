/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useContext, createContext } from "react";

export type NotificationProps = {
    /**
     * Key to render multiple toasts.
     * This is being set automatically unless specified manually.
     */
    key?: number;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Alert message
     */
    message?: string;
    /**
     * Custom component or html-layout
     */
    children?: React.ReactElement;
    /**
     * Indicates when the alert will disappear in ms. Defaults too 5000.
     * Pass 0 for infinite duration.
     */
    duration?: number;
    /**
     * This state will define which type of notification will showed up .
     * @default "warning"
     */
    type?: "success" | "warning" | "info" | "error";

    /**
     * The variant to use.
     * @default "filled"
     */
    variant?: "standard" | "filled" | "outlined";
    /**
     * Alert position on the screen
     */
    position?: {
        vertical?: "top" | "bottom";
        horizontal?: "left" | "right" | "center";
    };
    /**
     * On Close callback
     */
    onClose?: () => void;
};

export type NotificationContextProps = {
    notificationPack: NotificationProps[];
    setNotificationPack: (toasts: NotificationProps[]) => void;
    addNotification: (toast: NotificationProps) => void;
    removeNotification: (key: NotificationProps["key"]) => void;
};

const NotificationContext = createContext<NotificationContextProps>({
    notificationPack: [],
    setNotificationPack: (toasts) => {
        console.log(toasts);
    },
    addNotification: (toast) => {
        console.log(toast);
    },
    removeNotification: (key) => {
        console.log(key);
    }
});

const NotificationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [notificationPack, setNotificationPack] = useState<NotificationProps[]>([]);

    const addNotification = (toast: NotificationProps) => {
        const key = toast.key || Date.now();

        // Prevent duplicated toasts
        if (notificationPack.find((toast) => toast.key === key)) {
            return;
        }
        const rest = notificationPack.length < 3 ? notificationPack : notificationPack.slice(0, -1);
        setNotificationPack([{ ...toast, key }, ...rest]);
    };

    const removeNotification = (key: NotificationProps["key"]) => {
        setNotificationPack((prev) => prev.filter((toast) => toast.key !== key));
    };

    return (
        <NotificationContext.Provider
            value={{
                notificationPack,
                setNotificationPack,
                addNotification,
                removeNotification
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);

export default NotificationProvider;
