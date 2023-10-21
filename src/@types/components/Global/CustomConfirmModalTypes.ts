import { DialogProps, ModalProps } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

export interface CustomConfirmModalProps extends Omit<DialogProps, "title"> {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    open: boolean | ModalProps["open"];
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    setOpen: (isOpen: boolean) => void | ModalProps["onClose"];
    /**
     * BackgroundColor of  the Modal.
     */
    children?: React.ReactNode;
    handleSubmit: (event: React.SyntheticEvent | Event) => void;
    handleCancel: (event: React.SyntheticEvent | Event) => void;
    agreedButtonTitle?: string;
    disagreedButtonTitle?: string;
    agreedButtonColor?:
        | "inherit"
        | "info"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "warning";
    Transition?: React.JSXElementConstructor<
        TransitionProps & { children: React.ReactElement<any, any> }
    >;
}
