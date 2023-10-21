import { SelectProps } from "@mui/material";

export type OptionsType = {
    id: number | string;
    name: string;
};
/* @ts-ignore */
export interface CustomMultipleSelectBoxWithCheckBoxProps extends SelectProps {
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
    // defaultValue?: SelectProps["defaultValue"];
    value?: SelectProps["value"];
    handleBlur?: React.FocusEventHandler<any> | null;
    // handleChange?: ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void) | null;
    options: any[];
    customClass?: string;
    inputLabelSize?: "small" | "normal";
    disableItems?: any[];
    selectAll?: boolean;
    titleLength?: number;
    selectedValue?: any[];
    handleChange?: ((value: any[]) => void) | null;
    menuClasses?: string;
    defaultValue?: any[];
    setSelectedValue: (value: any) => void;
    /**
     * The Color variant to use.
     * @default 'secondary'
     */
    color?: SelectProps["color"];
    error?: SelectProps["error"];
}
