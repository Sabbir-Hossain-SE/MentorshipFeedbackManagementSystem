import { Drawer } from "@mui/material";
import SideBarItems from "components/SideBarItem/Index";
import SideBarFooter from "components/SideBarItem/SideBarFooter";
import { SideBarProps } from "interfaces/components/Global/sidebar/ISideBar";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./core_sidebar.css";

const Sidebar = (props: SideBarProps) => {
    const {
        sideBarMode,
        drawerWidth,
        sideBarStatusForSmallDevice,
        setSideBarStatusForSmallDevice,
        sideBarStatusForLargeDevice,
        setSideBarStatusFormLargeDevice,
        sideBarStatusOnHoverForLargeDevice,
        ThemeToggleButton
    } = props;
    const defaultClasses = "schema_sidebar";
    const history = useHistory();

    useEffect(() => {
        if (sideBarMode === "custom") {
            setSideBarStatusFormLargeDevice(false);
        }
    }, [history.location.pathname, sideBarMode, setSideBarStatusFormLargeDevice]);

    const handleSidebarToggle = (device: string) => {
        if (device === "small") {
            setSideBarStatusForSmallDevice(!sideBarStatusForSmallDevice);
        } else {
            setSideBarStatusFormLargeDevice(true);
        }
    };

    const classes = defaultClasses;
    return (
        <>
            <Drawer
                variant="temporary"
                open={sideBarStatusForSmallDevice}
                className={classes}
                onClose={() => handleSidebarToggle("small")}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "block", md: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundImage: "none"
                    }
                }}
            >
                <SideBarItems />
                <SideBarFooter>
                    <ThemeToggleButton />
                </SideBarFooter>
            </Drawer>

            <Drawer
                className={classes}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    display: { xs: "none", sm: "none", md: "none", lg: "block" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        marginTop: "64px",
                        height: "calc(100% - 64px) !important"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={
                    sideBarStatusForLargeDevice ||
                    (!sideBarStatusForLargeDevice && sideBarStatusOnHoverForLargeDevice)
                }
            >
                <>
                    <SideBarItems />

                    <SideBarFooter>
                        <ThemeToggleButton />
                    </SideBarFooter>
                </>
            </Drawer>
        </>
    );
};

export default Sidebar;
