import { InputBaseProps, SelectChangeEvent, SelectProps } from "@mui/material";
import { ReactNode } from "react";

export type OptionType = { id: any; name: string };
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
export interface DynamicSelectBoxProps extends SelectProps {
    options: OptionType[];
    label?: React.ReactNode | string;
    size?: InputBaseProps["size"];
    name?: string;
    register?: any;
    menuClasses?: string;
    customClass?: string;
    fieldDisable?: InputBaseProps["disabled"];
    placeholder?: string;
    handleChange?: ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void) | null;
    titleLength?: number;
    inputLabelSize?: "small" | "normal";
    searchable?: boolean;
    creatable?: boolean;
    addSearchedOption?: (arg: string) => void;
    disableItems?: any[];
    /**
     * The Color variant to use.
     * @default 'secondary'
     */
    color?: SelectProps["color"];
    error?: SelectProps["error"];
    sx?: SelectProps["sx"];
    className?: SelectProps["className"];
    classes?: SelectProps["classes"];
    style?: SelectProps["style"];
    startAdornment?: SelectProps["startAdornment"];
    endAdornment?: SelectProps["endAdornment"];
    inputComponent?: SelectProps["inputComponent"];
    inputProps?: SelectProps["inputProps"];
    defaultValue?: any;
    helperText?: string | ReactNode;
    /**
     * The width of selectbox.
     * @default '200px'
     */
    minWidth?: string | number;
}
