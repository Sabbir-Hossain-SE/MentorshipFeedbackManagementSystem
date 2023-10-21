import { ButtonProps } from "@mui/material";

export interface CustomButtonPropsType extends ButtonProps {
    btnText: React.ReactNode;
    customClass?: string;
    handleButton?: (event: React.SyntheticEvent<any | Event>) => void;
    loader?: boolean;
    textTransform?: boolean;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
     * @default 'primary'
     */
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: "small" | "medium" | "large";
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
}
