import { CircularProgressProps } from "@mui/material";

export interface CustomCircularProgressProps extends CircularProgressProps {
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit";
    size?: number | string;
    value?: number;
    variant?: "determinate" | "indeterminate";
}
