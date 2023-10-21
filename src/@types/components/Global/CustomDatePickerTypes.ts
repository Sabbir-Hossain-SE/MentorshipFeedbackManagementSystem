import { DesktopDatePickerProps } from "@mui/x-date-pickers";

export interface CustomDatePickerProps
    extends Omit<DesktopDatePickerProps<any, any>, "onChange" | "renderInput" | "value"> {
    label?: string;
    date: Date;
    handleChange: (newValue: any) => void;
}
