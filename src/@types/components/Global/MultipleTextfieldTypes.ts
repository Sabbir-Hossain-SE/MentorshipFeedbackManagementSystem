import { CustomBaseTextFieldProps } from "./CustomTextFieldTypes";

export interface MultipleTextFiledProps extends CustomBaseTextFieldProps {
    name: string;
    fieldDataList: any[];
    setFieldDataList: (arg: any[]) => void;
    placeholder?: string;
    isError?: boolean;
}
