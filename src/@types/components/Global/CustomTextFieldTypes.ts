import {
    BaseTextFieldProps,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps
} from "@mui/material";

export interface CustomBaseTextFieldProps extends BaseTextFieldProps {
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
    register?: any | object;
    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The helper text content.
     */
    helperText?: React.ReactNode;
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id?: string;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: unknown;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     * @default false
     */
    error?: boolean;
    name?: string;
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required?: boolean;
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: string | number;
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: string | number;
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows?: string | number;
    /**
     * The size of the component.
     */
    // size?: "small" | "medium";
    customClass?: string;
    handleOnBlur?:
        | StandardTextFieldProps["onBlur"]
        | StandardTextFieldProps["onBlur"]
        | OutlinedTextFieldProps["onBlur"]
        | FilledTextFieldProps["onBlur"]
        | null;
    handleChange?:
        | StandardTextFieldProps["onChange"]
        | OutlinedTextFieldProps["onChange"]
        | FilledTextFieldProps["onChange"]
        | null;
    variant?:
        | StandardTextFieldProps["variant"]
        | OutlinedTextFieldProps["variant"]
        | FilledTextFieldProps["variant"];
    InputProps?:
        | StandardTextFieldProps["InputProps"]
        | OutlinedTextFieldProps["InputProps"]
        | FilledTextFieldProps["InputProps"];
}

// export interface CustomTextFieldVarientProps extends TextFieldProps {
//     variant?: "standard" | "filled";
// }
