/* eslint-disable no-unused-vars */
import { Button, CircularProgress, StyledEngineProvider } from "@mui/material";
import { CustomButtonPropsType } from "../../../@types/CustomButtonType";
import "./button.style.css";

const CustomButton: React.FC<CustomButtonPropsType> = ({
    children,
    btnText = "button",
    customClass = "",
    handleButton,
    loader = false,
    textTransform = false,
    size,
    color,
    disabled,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "af-btn";
    const classes = `${defaultClasses} ${customClass} ${textTransform ? "text_capitalize" : ""}`;
    return (
        <StyledEngineProvider injectFirst>
            {loader ? (
                <Button
                    disabled
                    endIcon={<CircularProgress color="inherit" size={12} />}
                    className={classes}
                    size={size}
                    color={color}
                    {...rest}
                >
                    {btnText || children}
                </Button>
            ) : (
                <Button
                    onClick={handleButton}
                    size={size}
                    disabled={disabled}
                    color={color}
                    className={classes}
                    {...rest}
                >
                    {btnText || children}
                </Button>
            )}
        </StyledEngineProvider>
    );
};

export default CustomButton;
