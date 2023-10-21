import Menu from "@mui/material/Menu";
import React from "react";
import { CustomButtonMenuPropsType } from "../../../@types/components/Global/CustomButtonMenuTypes";
import CustomButton from "../Buttons/Button/CustomButton";

const CustomButtonMenu: React.FC<CustomButtonMenuPropsType> = ({
    children,
    buttonTitle = "",
    icon,
    menuTransformOrigin = {
        vertical: "top",
        horizontal: "left"
    },
    menuAnchorOrigin = {
        vertical: "top",
        horizontal: "left"
    },
    buttonVariants = "contained",
    color = "info"
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.SyntheticEvent<any, Event>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <CustomButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                handleButton={handleClick}
                startIcon={icon}
                btnText={buttonTitle}
                size="medium"
                variant={buttonVariants}
                color={color}
            />
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={menuAnchorOrigin}
                transformOrigin={menuTransformOrigin}
            >
                {children}
            </Menu>
        </div>
    );
};

export default CustomButtonMenu;
