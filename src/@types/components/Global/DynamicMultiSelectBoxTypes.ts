import { InputBaseProps, SelectProps } from "@mui/material";
import { ReactNode } from "react";

export type OptionType = { id: any; name: string };
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
export interface DynamicMultiSelectBoxProps extends SelectProps {
    options: OptionType[];
    label?: React.ReactNode | string;
    selectAll?: boolean;
    size?: InputBaseProps["size"];
    name?: string;
    register?: any;
    customClass?: string;
    fieldDisable?: InputBaseProps["disabled"];
    menuClasses?: string;
    placeholder?: string;
    handleChange?: ((event: any, child: React.ReactNode) => void) | null;
    titleLength?: number;
    inputLabelSize?: "small" | "normal";
    searchable?: boolean;
    creatable?: boolean;
    addSearchedOption?: (arg: string) => void;
    /**
     * The Color variant to use.
     * @default 'secondary'
     */
    color?: SelectProps["color"];
    error?: SelectProps["error"];
    helperText?: string | ReactNode;
    sx?: SelectProps["sx"];
    className?: SelectProps["className"];
    classes?: SelectProps["classes"];
    style?: SelectProps["style"];
    startAdornment?: SelectProps["startAdornment"];
    endAdornment?: SelectProps["endAdornment"];
    inputComponent?: SelectProps["inputComponent"];
    inputProps?: SelectProps["inputProps"];
    defaultValue?: any[];
    /**
     * The width of selectbox.
     * @default '200px'
     */
    minWidth?: string | number;
    clearable?: boolean;
}
