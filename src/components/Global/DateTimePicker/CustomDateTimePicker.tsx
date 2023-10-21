import { FormControl, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { CustomDateTimePickerProps } from "../../../@types/components/Global/CustomDateTimePickerType";
import "./custom.style.css";

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
    label = "",
    register = null,
    value,
    setValue,
    ...rest
}) => {
    const handleChange = (newValue: any) => {
        if (setValue) {
            setValue(newValue);
        }
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <FormControl
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: "40px",
                        maxWidth: "250px",
                        width: "100%"
                    },
                    MuiPaper: { defaultProps: { sx: { "& *:focus": { outline: "none" } } } }
                }}
            >
                <Typography
                    variant="caption"
                    textAlign="start"
                    sx={{
                        fontFamily: "Gotham Pro Regular !important",
                        fontStyle: "normal !important",
                        fontWeight: "normal !important",
                        fontSize: "0.75rem !important",
                        lineHeight: "1.125rem !important",
                        letterSpacing: "0.15px !important"
                    }}
                >
                    {label}
                </Typography>
                <DateTimePicker
                    PopperProps={{
                        className: "global__date__time__picker__wr"
                    }}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params: any) => <TextField {...params} />}
                    {...register}
                    {...rest}
                />
            </FormControl>
        </LocalizationProvider>
    );
};

export default CustomDateTimePicker;
