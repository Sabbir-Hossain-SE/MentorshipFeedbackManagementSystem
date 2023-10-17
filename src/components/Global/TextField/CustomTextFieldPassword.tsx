import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, StyledEngineProvider, TextField } from "@mui/material";
import { CustomTextFieldPasswordProps } from "../../@types/CustomTextFieldPasswordTypes";

const style = {
    "& label": {
        // lineHeight:"32px",
    },
    "& .MuiOutlinedInput-root": {
        // height: '48px',
        "& button": {
            padding: "0"
        },
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

const CustomTextFieldPassword: React.FC<CustomTextFieldPasswordProps> = ({
    name,
    id,
    fullWidth = true,
    handleClickShowPassword,
    show,
    placeholder = "",
    size = "small",
    variant = "outlined",
    customClass = "",
    register = null,
    ...rest
}: CustomTextFieldPasswordProps) => {
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
                size={size}
                {...rest}
                {...register}
                InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                            >
                                {show ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            {/* {helperText ? <FormHelperText className="error__helper__text">{helperText}</FormHelperText> :  " "} */}
        </StyledEngineProvider>
    );
};

export default CustomTextFieldPassword;
