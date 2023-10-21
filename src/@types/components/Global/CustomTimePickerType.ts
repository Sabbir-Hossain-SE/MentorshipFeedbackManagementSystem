import { TimePickerProps } from "@mui/x-date-pickers";

export interface CustomTimePickerProps
    extends Omit<TimePickerProps<any, any>, "onChange" | "renderInput" | "value"> {
    label?: string | null;
    register?: any | null;
}
