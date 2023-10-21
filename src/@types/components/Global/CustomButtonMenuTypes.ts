import Popover, { MenuProps } from "@mui/material";
import { ReactNode } from "react";

export interface CustomButtonMenuPropsType extends MenuProps {
    buttonTitle: string;
    /**
     * Icon element.
     */
    icon?: React.ReactElement;

    // eslint-disable-next-line @typescript-eslint/ban-types
    menuAnchorOrigin?: Popover.PopoverOrigin;
    menuTransformOrigin?: Popover.PopoverOrigin;
    buttonVariants?: "text" | "outlined" | "contained";
    color?: "inherit" | "info" | "primary" | "secondary" | "success" | "error";
    children?: ReactNode;
}
