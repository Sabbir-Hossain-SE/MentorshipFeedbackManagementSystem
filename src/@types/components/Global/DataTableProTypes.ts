import { DataGridProProps, GridDensity } from "@mui/x-data-grid-pro";
import { CustomBaseTextFieldProps } from "./CustomTextFieldTypes";

export interface ExtraProps extends DataGridProProps {
    tableId?: string;
    searchStatus?: boolean;
    searchText?: string;
    selectedItems?: number[];
    rowHeight?: number;
    density?: GridDensity;
    handleFilter?: CustomBaseTextFieldProps["handleChange"];
    customHeaderButtons?: React.ReactNode;
    otherFilters?: () => React.ReactNode;
}
