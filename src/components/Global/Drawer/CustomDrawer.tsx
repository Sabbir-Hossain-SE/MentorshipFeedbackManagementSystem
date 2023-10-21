import ClearIcon from "@mui/icons-material/Clear";
import { Box, Theme, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React from "react";
import { CustomDrawerPropsType } from "../../../@types/components/Global/CustomDrawerTypes";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";
import "./drawer_custom.css";

const drawerWidth = 850;

const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden",
    overflowY: "hidden"
});

const closedMixin = (theme: Theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    overflowY: "hidden",
    width: `calc(${theme.spacing(10)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: 0,
        padding: 0
    }
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(
    ({ theme, open }) => `{
    width: ${drawerWidth},
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(${open} && {
        ...${openedMixin(theme)},
        "& .MuiDrawer-paper": ${openedMixin(theme)}
    }),
    ...(!${open} && {
        ...${closedMixin(theme)},
        "& .MuiDrawer-paper": ${closedMixin(theme)}
    })
}`
);

const CustomizedDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        z-index: 0;
    }
`;

const CustomDrawer: React.FC<CustomDrawerPropsType> = ({
    children,
    drawerOpen,
    setDrawerOpen,
    customClass = "",
    heading = "Drawer",
    ...rest
}) => {
    const defaultClasses = "custom_drawer generate__schema_active_drawer";
    const classes = `${defaultClasses} ${customClass}`;

    React.useEffect(() => {
        document.body.classList.toggle("drawer-open", drawerOpen);
    }, [drawerOpen]);
    return (
        <CustomizedDrawer
            variant="permanent"
            open={drawerOpen}
            anchor="right"
            className={classes}
            {...rest}
        >
            <Box className="overlay" />
            <Box className="drawer_header">
                <Box className="drawer_title">
                    <Typography variant="subtitle1" color="text.fill">
                        {heading}
                    </Typography>
                </Box>
                <Box className="drawer_buttons">
                    <CustomIconButton
                        handleButton={() => setDrawerOpen(false)}
                        className="close_drawer"
                        sx={{ backgroundColor: "action.disabled" }}
                    >
                        <ClearIcon color="primary" />
                    </CustomIconButton>
                </Box>
            </Box>
            <Box className="drawer_content">
                {" "}
                {/* If you need border arround the content just add this class "bordered" */}
                {children}
            </Box>
        </CustomizedDrawer>
    );
};
export default CustomDrawer;
