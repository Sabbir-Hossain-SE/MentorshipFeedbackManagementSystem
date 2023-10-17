import { FormHelperText, StyledEngineProvider, TextField } from "@mui/material";
import { CustomTextFieldWithoutRegProps } from "../../@types/CustomTextFieldWithoutRegType";
import "./textField.style.css";

const style = {
    "& label": {
        lineHeight: "32px"
    },
    "& .MuiOutlinedInput-root": {
        height: "48px",

        "& fieldset": {
            borderColor: "rgba(42, 46, 52, 0.12)"

            // - Set the Input border
        },
        "&:hover fieldset": {
            borderColor: "rgba(27, 20, 100, 1)" // - Set the Input border when parent has :hover
        },
        "&.Mui-focused fieldset": {
            // - Set the Input border when parent is focused
            borderColor: "rgba(37, 120, 255, 1)"
        }
    }
};

const CustomTextFieldWithoutReg: React.FC<CustomTextFieldWithoutRegProps> = ({
    name,
    id,
    fullWidth = true,
    placeholder = "",
    variant = "outlined",
    customClass = "",
    helperText = "",
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    // custom_textfieldz
    const defaultClasses = " ";
    const classes = `${defaultClasses} ${customClass}`;
    return (
        <StyledEngineProvider injectFirst>
            <TextField
                sx={style}
                className={classes}
                placeholder={placeholder}
                fullWidth={fullWidth}
                id={id}
                name={name}
                variant={variant}
                size="small"
                {...rest}
            />
            {helperText ? (
                <FormHelperText className="error__helper__text">{helperText}</FormHelperText>
            ) : (
                " "
            )}
        </StyledEngineProvider>
    );
};

export default CustomTextFieldWithoutReg;
