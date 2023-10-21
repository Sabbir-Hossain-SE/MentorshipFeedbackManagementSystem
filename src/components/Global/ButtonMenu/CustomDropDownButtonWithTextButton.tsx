/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import { generateRandomString } from "utils/helperFunction";
import { CustomDropDownButtonWithTextButtonPropsType } from "../../../@types/components/Global/CustomDropDownButtonWithTextButtonTypes";
import CustomButton from "../Buttons/Button/CustomButton";

const CustomDropDownButtonWithTextButton: React.FC<CustomDropDownButtonWithTextButtonPropsType> = ({
    title,
    size,
    color,
    startIcon,
    endIcon,
    options,
    buttonVariants = "contained",
    ...rest
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenuItems = () => {
        let data: JSX.Element[] = [];
        if (options.length > 0) {
            data = options.map((item, index) => {
                return (
                    <MenuItem
                        disabled={item?.disabled}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index + generateRandomString(10)}
                        onClick={() => {
                            if (item.closeOnClick === undefined || item?.closeOnClick) {
                                handleClose();
                            }

                            item.handleClick();
                        }}
                    >
                        {item.name}
                    </MenuItem>
                );
            });
        }
        return data;
    };

    return (
        <div>
            <CustomButton
                handleButton={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                sx={{ padding: { sm: "7px 10px !important", md: "7px 18px !important" } }}
                aria-expanded={open ? "true" : undefined}
                btnText={<Typography variant="inherit">{title}</Typography>}
                color={color}
                variant={buttonVariants}
                startIcon={startIcon}
                size={size}
                endIcon={endIcon}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
                {...rest}
                open={open}
            >
                {renderMenuItems()}
            </Menu>
        </div>
    );
};

export default CustomDropDownButtonWithTextButton;
