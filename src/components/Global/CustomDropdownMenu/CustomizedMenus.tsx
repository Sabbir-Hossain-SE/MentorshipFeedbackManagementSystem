/* eslint-disable react/no-array-index-key */
import AppsIcon from "@mui/icons-material/Apps";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, ListItemText, Menu, PopoverProps, Typography } from "@mui/material";
import React from "react";
import { CustomizedMenusProps } from "../../@types/CustomizedMenusType";
import { generateRandomString } from "../utils/helperFunction";
import "./custom_dropdown_menu.style.css";

// const StyledMenu = withStyles({})((props) => (
//     <Menu
//         elevation={0}
//         anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center"
//         }}
//         transformOrigin={{
//             vertical: "top",
//             horizontal: "center"
//         }}
//         {...props}
//     />
// ));

const CustomizedMenus: React.FC<CustomizedMenusProps> = ({
    customClass = "",
    appList = [],
    appUrls
}) => {
    // Please assign your default style classes which are include in style file
    const defaultClasses = "custom_dropdown_menu";
    const classes = `${defaultClasses} ${customClass}`;
    const [anchorEl, setAnchorEl] = React.useState<PopoverProps["anchorEl"] | null>(null);
    // const history = useHistory();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes} sx={{ backgroundColor: "action.disable" }}>
            <Button
                aria-haspopup="true"
                variant="text"
                aria-controls={anchorEl ? "customized-menu" : undefined}
                aria-expanded={anchorEl ? "true" : undefined}
                onClick={handleClick}
            >
                <AppsIcon />
            </Button>
            <Menu
                elevation={0}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                id="customized-menu"
                className="dropdown_wrapper"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Box className="switch_to">
                    <Typography variant="h4">Switch to</Typography>
                    <Button
                        onClick={() => window.location.replace("/dashboard")}
                        variant="contained"
                        color="secondary"
                        className={classes}
                        startIcon={<ArrowBackIcon />}
                    >
                        Agency Dashboard
                    </Button>
                </Box>

                {appList.length > 0 && (
                    <Box className="dropdown_menu_items">
                        {appList.map(
                            (app, index) =>
                                app.subscribed && (
                                    <Box
                                        key={index + generateRandomString(10)}
                                        className="app_list_item"
                                        onClick={() =>
                                            window.location.replace(appUrls[app.identifier])
                                        }
                                    >
                                        <img src={app.logo} alt="logo" width="36" height="auto" />
                                        <ListItemText
                                            primary={app.name}
                                            sx={{ marginLeft: "8px" }}
                                        />
                                    </Box>
                                )
                        )}
                    </Box>
                )}
            </Menu>
        </Box>
    );
};

export default CustomizedMenus;
