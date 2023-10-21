import { MenuProps } from "@mui/material";
import React from "react";

export type Options = {
    name: React.ReactNode;
    handleClick: () => void;
    /**
     * Use to apply item is disable or not styling.
     * @default false
     */
    disabled?: boolean;
    closeOnClick?: any;
};
export interface CustomDropDownButtonWithTextButtonPropsType extends MenuProps {
    title?: string;
    size?: "small" | "medium" | "large";
    buttonVariants?: "text" | "outlined" | "contained";
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    disabledStatus: boolean;
    options: Options[];
    color?: "inherit" | "info" | "primary" | "secondary" | "success" | "error";
    itemWidth: string | number;
    children?: React.ReactNode;
}
