/* eslint-disable react-hooks/exhaustive-deps */

// import { useCustomTheme } from "@hipdevteam/afglobalcomponents";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, CssBaseline, IconButton, PaletteMode, ThemeProvider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Notification from "components/Global/Notification/Notification";
import NotificationProvider from "components/Global/Notification/NotificationProvider";
import Sidebar from "components/Global/Sidebar/Sidebar";
import TopBar from "components/Global/TopBar/TopBar";
import { PropsInterface } from "interfaces/layouts/IMainPageWrapper";
import storage from "local-storage-fallback";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { getUser } from "statemanagement/features/auth/authSlice";
import customTheme from "theme/theme";
import useCustomTheme from "theme/useCustomTheme";
import useWindowSize from "utils/customHooks/useWindowSize/useWindowSize";
import { SideBarMode } from "../@types/Global";
import "../assets/css/global-data-table.css";

const drawerWidth = 240;
const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

const ThemeToggleButton = () => {
    const theme = useCustomTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton
            sx={{ ml: 1, marginLeft: "30px", color: "secondary" }}
            onClick={() => {
                colorMode.toggleColorMode();
            }}
        >
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon color="secondary" />
            ) : (
                <Brightness4Icon color="primary" />
            )}
        </IconButton>
    );
};
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
    size?: number;
    sideBarMode: SideBarMode | "";
}>(({ theme, open, size, sideBarMode }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: sideBarMode !== "invisible" && size && size > 1366 ? `-${drawerWidth}px` : "0px",
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

const MainPageWrapper: React.FC<PropsInterface> = (props) => {
    const { children, pageTitle, sideBarMode } = props;
    const user = useSelector(getUser);
    const [sideBarStatusForLargeDevice, setSideBarStatusFormLargeDevice] = useState<boolean>(true);
    const [sideBarStatusForSmallDevice, setSideBarStatusForSmallDevice] = useState<boolean>(false);
    const [sideBarStatusOnHoverForLargeDevice, setSideBarStatusOnHoverForLargeDevice] =
        useState<boolean>(false);
    const [mode, setMode] = useState<PaletteMode>("light");
    const { screenWidth } = useWindowSize();

    useEffect(() => {
        let themeMode: PaletteMode = "light";
        if (user?.id) {
            themeMode = (storage.getItem(`mode_${user.id}`) as PaletteMode) ?? "light";
            storage.setItem("user", JSON.stringify(user));
        }
        setMode(themeMode || "light");
    }, [user]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
                if (user?.id) {
                    storage.setItem(`mode_${user.id}`, mode === "light" ? "dark" : "light");
                }
            }
        }),
        [mode]
    );

    const theme = useMemo(customTheme(mode), [mode]);

    return (
        <HelmetProvider>
            {pageTitle && (
                <Helmet defer={false}>
                    <title>{pageTitle}</title>
                </Helmet>
            )}

            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <NotificationProvider>
                        <Box className="user_layout">
                            <>
                                <Notification />
                                <TopBar
                                    ThemeToggleButton={ThemeToggleButton}
                                    drawerWidth={drawerWidth}
                                    setSideBarStatusFormLargeDevice={
                                        setSideBarStatusFormLargeDevice
                                    }
                                    setSideBarStatusOnHoverForLargeDevice={
                                        setSideBarStatusOnHoverForLargeDevice
                                    }
                                    sideBarStatusForLargeDevice={sideBarStatusForLargeDevice}
                                    sideBarStatusForSmallDevice={sideBarStatusForSmallDevice}
                                    sideBarStatusOnHoverForLargeDevice={
                                        sideBarStatusOnHoverForLargeDevice
                                    }
                                    setSideBarStatusForSmallDevice={setSideBarStatusForSmallDevice}
                                    sideBarMode={sideBarMode}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        marginTop: "64px",
                                        height: "calc(100vh - 64px)"
                                    }}
                                >
                                    <CssBaseline />
                                    {sideBarMode !== "invisible" && (
                                        <Sidebar
                                            drawerWidth={drawerWidth}
                                            sideBarStatusForSmallDevice={
                                                sideBarStatusForSmallDevice
                                            }
                                            setSideBarStatusForSmallDevice={
                                                setSideBarStatusForSmallDevice
                                            }
                                            sideBarStatusForLargeDevice={
                                                sideBarStatusForLargeDevice
                                            }
                                            setSideBarStatusFormLargeDevice={
                                                setSideBarStatusFormLargeDevice
                                            }
                                            sideBarStatusOnHoverForLargeDevice={
                                                sideBarStatusOnHoverForLargeDevice
                                            }
                                            ThemeToggleButton={ThemeToggleButton}
                                            sideBarMode={sideBarMode}
                                        />
                                    )}

                                    <Main
                                        style={{
                                            width:
                                                sideBarMode !== "invisible"
                                                    ? `calc(100% - ${drawerWidth}px)`
                                                    : "100%",
                                            backgroundColor: "background.default"
                                        }}
                                        id="main_body"
                                        size={screenWidth}
                                        open={sideBarStatusForLargeDevice}
                                        sideBarMode={sideBarMode}
                                    >
                                        {children}
                                    </Main>
                                </Box>
                            </>
                        </Box>
                    </NotificationProvider>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </HelmetProvider>
    );
};

export default MainPageWrapper;
