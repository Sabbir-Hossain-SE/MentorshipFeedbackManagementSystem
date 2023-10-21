import IconButton from "@mui/material/IconButton";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { CustomIconButtonProps } from "../../../../@types/components/Global/CustomIconButtonTypes";
import "./iconButton.style.css";

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
    children,
    customClass,
    size,
    handleButton,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    return (
        <StyledEngineProvider injectFirst>
            <IconButton
                size={size}
                className={classes}
                aria-label="icon-button"
                onClick={handleButton}
                {...rest}
            >
                {children}
            </IconButton>
        </StyledEngineProvider>
    );
};

export default CustomIconButton;
