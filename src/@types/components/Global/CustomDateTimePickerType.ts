import { DateTimePickerProps } from "@mui/x-date-pickers";

export interface CustomDateTimePickerProps
    extends Omit<DateTimePickerProps<any, any>, "onChange" | "renderInput"> {
    label?: string;
    register?: null | any;
    value: string | null | Date;
    setValue?: React.Dispatch<React.SetStateAction<string | null | Date>>;
}
