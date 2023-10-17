import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CustomDatePickerProps } from "../../@types/CustomDatePickerTypes";
import "./custom.style.css";

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
    const { label, date, handleChange, ...rest } = props;

    const handleDateChange = (newValue) => {
        handleChange(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label={label}
                PopperProps={{
                    className: "global__date__picker__wr"
                }}
                inputFormat="yyyy/mm/dd"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                {...rest}
            />
        </LocalizationProvider>
    );
};

export default CustomDatePicker;
