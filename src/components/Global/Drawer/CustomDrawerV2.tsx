import ClearIcon from "@mui/icons-material/Clear";
import { Box, Drawer, Typography } from "@mui/material";
import * as React from "react";
import { CustomDrawerV2PropsType } from "../../../@types/components/Global/CustomDrawerTypes";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";
import useCustomDrawerStyles from "./CustomDrawer.Style";

const CustomDrawerV2: React.FC<CustomDrawerV2PropsType> = (props) => {
    const classes = useCustomDrawerStyles();
    const {
        onCloseDrawer,
        heading,
        children,
        top = "64px",
        drawerBodySx,
        closeButton,
        anchor = "right",
        variant = "temporary",
        width = "850px",
        minWidth = "750px",
        maxWidth,
        ...rest
    } = props;
    return (
        <Box>
            <Drawer
                anchor={anchor}
                variant={variant}
                onClose={() => onCloseDrawer(false)}
                BackdropProps={{
                    sx: {
                        marginTop: top
                    }
                }}
                PaperProps={{
                    sx: {
                        width: {
                            xl: width,
                            lg: width,
                            md: "calc(100% - 100px)",
                            sm: "calc(100% - 200px)",
                            xs: "calc(100% - 300px)"
                        },
                        minWidth: {
                            xl: minWidth,
                            lg: minWidth,
                            md: "calc(100% - 200px)",
                            sm: "calc(100% - 200px)",
                            xs: "calc(100% - 100px)"
                        },
                        maxWidth,
                        height: `calc(100vh - ${top})`,
                        padding: "24px",
                        flexShrink: 0,
                        backgroundColor: "background.paper",
                        backgroundImage: "unset",
                        boxSizing: "border-box",
                        marginTop: top,
                        boxShadow: "0px 0px 16px rgba(127, 130, 133, 0.08)",
                        border: "none",
                        overflow: "auto",
                        "&::-webkit-scrollbar": {
                            width: "0.4em"
                        },
                        "&::-webkit-scrollbar-track": {
                            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                            backgroundColor: "background.paper"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "primary.main"
                        }
                    }
                }}
                {...rest}
            >
                <Box className={classes.drawerHeader}>
                    <Box>
                        {typeof heading === "string" && (
                            <Typography
                                variant="subtitle1"
                                color="text.fill"
                                className={classes.heading}
                            >
                                {heading}
                            </Typography>
                        )}
                        {typeof heading !== "string" && heading}
                    </Box>
                    <Box>
                        {typeof closeButton === "undefined" && (
                            <CustomIconButton
                                handleButton={() => onCloseDrawer(false)}
                                className={classes.closeButton}
                            >
                                <ClearIcon color="primary" className={classes.closeIcon} />
                            </CustomIconButton>
                        )}
                        {typeof closeButton !== "undefined" && closeButton}
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...{
                            height: "100%",
                            // marginBottom: "20px",
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "0.4em"
                            },
                            "&::-webkit-scrollbar-track": {
                                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                                backgroundColor: "background.paper"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "primary.main"
                            }
                        },
                        ...drawerBodySx
                    }}
                >
                    {children}
                </Box>
            </Drawer>
        </Box>
    );
};

export default CustomDrawerV2;
