/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { Box, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { generateRandomString } from "utils/helperFunction";
import { CustomDropDownButtonMenuPropsType } from "../../../@types/components/Global/CustomDropDownButtonMenuTypes";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";

const CustomDropDownButtonMenu: React.FC<CustomDropDownButtonMenuPropsType> = ({
    buttonContent,
    disabledStatus = false,
    options,
    itemWidth
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
                        sx={{ width: itemWidth }}
                        onClick={() => {
                            handleClose();
                            item.handleClick();
                        }}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index + generateRandomString(10)}
                    >
                        {item.name}
                    </MenuItem>
                );
            });
        }
        return data;
    };

    return (
        <Box>
            <CustomIconButton
                handleButton={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disabled={disabledStatus}
            >
                {buttonContent}
            </CustomIconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
            >
                {renderMenuItems()}
            </Menu>
        </Box>
    );
};

export default CustomDropDownButtonMenu;
