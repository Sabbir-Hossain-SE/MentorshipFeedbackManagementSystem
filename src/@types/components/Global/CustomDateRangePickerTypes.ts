import { DateRange, DesktopDateRangePickerProps } from "@mui/x-date-pickers-pro";

// type CustomDateRange = DesktopDateRangePickerProps<any, any> extends MobileDateRangePickerProps<any, any>;

export type CustomDateRange = DesktopDateRangePickerProps<any, any>;
export interface CustomDateRangePickerProps
    extends Omit<DesktopDateRangePickerProps<any, any>, "onChange" | "value" | "renderInput"> {
    dateRange: DateRange<any>;
    setDateRange: (arg: DateRange<any>) => void;
    disabled?: boolean;
    register?: any;
}
export interface VariantType {
    today: boolean;
    yesterday: boolean;
    lastSevenDays: boolean;
    lastThirtyDays: boolean;
    thisMonth: boolean;
    customRange?: boolean;
}
