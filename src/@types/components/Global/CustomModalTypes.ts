import { DialogProps, ModalProps } from "@mui/material";
import React from "react";

export interface CustomModalProps extends DialogProps {
    /**
     * Determine the max-width of the dialog.
     * The dialog width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     * @default 'sm'
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    minWidth?: string;
    /**
     * If `true`, the dialog stretches to `maxWidth`.
     *
     * Notice that the dialog width grow is limited by the default margin.
     * @default false
     */
    fullWidth?: boolean | false;
    /**
     * If `true`, the dialog is full-screen.
     * @default false
     */
    fullScreen?: boolean | false;
    /**
     * Title of The Modal.
     */
    title: string;
    /**
     * If `true`, the component is shown.
     */
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
    backgroundColor?: string;
    customClass?: string;
    children: React.ReactNode;
}
