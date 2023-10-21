import { TooltipProps } from "@mui/material";
import React from "react";

export interface CustomToolTipProps extends TooltipProps {
    title: NonNullable<React.ReactNode> | string;
    placement?:
        | "bottom-end"
        | "bottom-start"
        | "bottom"
        | "left-end"
        | "left-start"
        | "left"
        | "right-end"
        | "right-start"
        | "right"
        | "top-end"
        | "top-start"
        | "top";
    children: React.ReactElement;
}
