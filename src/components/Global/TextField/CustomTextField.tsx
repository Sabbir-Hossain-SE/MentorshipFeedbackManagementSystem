import { StyledEngineProvider, TextField } from "@mui/material";
import { CustomBaseTextFieldProps } from "../../../@types/components/Global/CustomTextFieldTypes";
import "./textField.style.css";

const CustomTextField: React.FC<CustomBaseTextFieldProps> = ({
    name,
    id,
    fullWidth = true,
    required = false,
    variant = "outlined",
    size = "small",
    customClass = "",
    handleOnBlur = null,
    handleChange = null,
    register = null,
    ...rest
}) => {
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    const style = {
        "& label": {
            lineHeight: "26px"
        }
    };

    return (
        <StyledEngineProvider injectFirst>
            <TextField
                sx={style}
                className={classes}
                fullWidth={fullWidth}
                id={id}
                name={name}
                variant={variant}
                size={size}
                autoComplete="off"
                required={required}
                color="secondary"
                {...register}
                {...rest}
                onChange={(e) => {
                    if (
                        register !== null &&
                        register !== undefined &&
                        register !== "" &&
                        handleChange == null &&
                        typeof register.onChange === "function"
                    ) {
                        register.onChange(e);
                    } else if (
                        (register == null || register === undefined || register === "") &&
                        handleChange != null &&
                        typeof handleChange === "function"
                    ) {
                        handleChange(e);
                    }
                }}
                onBlur={handleOnBlur}
                {...rest}
            />
        </StyledEngineProvider>
    );
};

export default CustomTextField;
