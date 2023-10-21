import { SelectChangeEvent, SelectProps } from "@mui/material";

export type OptionsType = {
    id: string | number;
    name: string;
};
/* @ts-ignore */
export interface CustomSelectBoxProps extends SelectProps {
    /**
     * The variant to use.
     * @default 'outlined'
     */
    variant?: "standard" | "outlined" | "filled";
    placeholder?: string;
    name?: string;
    /**
     * The size of the component.
     */
    size?: SelectProps["size"];
    /**
     * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
     */
    label?: React.ReactNode;
    register?: object | any;
    fieldDisable?: SelectProps["disabled"];
    defaultValue?: SelectProps["defaultValue"];
    value?: SelectProps["value"];
    handleBlur?: React.FocusEventHandler<any> | null;
    handleChange?: ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void) | null;
    options: any[];
    customClass?: string;
    inputLabelSize?: "small" | "normal";
    disableItems?: any[];
    /**
     * The Color variant to use.
     * @default 'secondary'
     */
    color?: SelectProps["color"];
    error?: SelectProps["error"];
}
