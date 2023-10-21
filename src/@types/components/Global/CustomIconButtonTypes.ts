import { IconButtonProps } from "@mui/material";

export interface CustomIconButtonProps extends IconButtonProps {
    customClass?: string;
    size?: "small" | "medium" | "large";
    handleButton?: (event: React.SyntheticEvent<any | Event>) => void;
    children: React.ReactNode;
}
