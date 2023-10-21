import { Chip, StyledEngineProvider } from "@mui/material";
import { CustomBadgeProps } from "../../../@types/components/Global/CustomBadgeTypes";

const CustomBadge: React.FC<CustomBadgeProps> = ({
    label = "chip",
    variant = "filled",
    handleClick,
    color = "primary",
    size,
    icon,
    avatar,
    customClass,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    return (
        <StyledEngineProvider injectFirst>
            <Chip
                label={label}
                variant={variant}
                onClick={handleClick}
                color={color}
                size={size}
                icon={icon}
                avatar={avatar}
                className={classes}
                {...rest}
            />
        </StyledEngineProvider>
    );
};

export default CustomBadge;
