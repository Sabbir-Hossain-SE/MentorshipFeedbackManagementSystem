/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    IconButton,
    StyledEngineProvider,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import { TopBarProps } from "interfaces/components/Global/topbar/ITopBar";
import storage from "local-storage-fallback";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "statemanagement/features/auth/authSlice";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";

const TopBar = (props: TopBarProps) => {
    const {
        setSideBarStatusFormLargeDevice,
        setSideBarStatusOnHoverForLargeDevice,
        sideBarStatusForLargeDevice,
        sideBarStatusForSmallDevice,
        setSideBarStatusForSmallDevice,
        sideBarMode
    } = props;
    const customTheme = useTheme();
    const user = useSelector(getUser);
    const [menuIconShow, setMenuIconShow] = useState(true);
    const [name, setName] = useState("");
    const [appLogo, setAppLogo] = useState({
        dark: "",
        light: ""
    });

    useEffect(() => {
        let sidebarStatus;
        if (user !== null && typeof user.id !== "undefined" && user.id !== null) {
            const status = storage.getItem(`sidebar_${user?.id}`);
            if (status != null) {
                sidebarStatus = JSON.parse(status);
            }
            // sidebarStatus = JSON.parse(
            //     storage.getItem(`sidebar_${process.env.REACT_APP_IDENTIFIER}_${user?.uuid}`)
            // );
        }

        if (
            typeof sidebarStatus !== "undefined" &&
            typeof setSideBarStatusFormLargeDevice !== "undefined"
        ) {
            setSideBarStatusFormLargeDevice(sidebarStatus);
        }
    }, [user]);

    const handleSideBarToggle = (device: string) => {
        if (device === "small") {
            setSideBarStatusForSmallDevice(!sideBarStatusForSmallDevice);
        } else {
            setSideBarStatusFormLargeDevice(true);
            storage.setItem(`sidebar_${user?.id}`, JSON.stringify(true));
        }
        if (!sideBarStatusForLargeDevice) {
            setSideBarStatusOnHoverForLargeDevice(true);
            setMenuIconShow(false);
        }
    };

    const handleLargeSideBarHoverAction = () => {
        if (!sideBarStatusForLargeDevice) {
            setSideBarStatusOnHoverForLargeDevice(true);
            setMenuIconShow(false);
        }
    };

    const handleLargeSideBarHoverActionMouseLeave = () => {
        setMenuIconShow(true);

        const mainBody = document.getElementById("main_body");

        if (mainBody !== null) {
            mainBody.addEventListener(
                "mouseenter",
                function (event) {
                    setSideBarStatusOnHoverForLargeDevice(false);
                },
                false
            );
        }
    };

    const handleLargeSideBarClose = () => {
        setSideBarStatusFormLargeDevice(false);
        setSideBarStatusOnHoverForLargeDevice(false);
        storage.setItem(`sidebar_${user?.id}`, JSON.stringify(false));
    };

    const renderLogo = () => {
        if (customTheme.palette.mode === "light") {
            if (appLogo.light !== "" && appLogo.light !== null) {
                return <img src={appLogo.light} alt="AF Ghl Report" />;
            }
            return (
                <Typography variant="h5" color="text.fill">
                    {name !== null ? name : "AgencyFrameWork"}
                </Typography>
            );
        }
        if (customTheme.palette.mode === "dark") {
            if (appLogo.dark !== "" && appLogo.dark !== null) {
                return <img src={appLogo.dark} alt="AF Ghl Report" />;
            }
            return (
                <Typography variant="h5" color="text.fill">
                    {name !== null ? name : "AgencyFrameWork"}
                </Typography>
            );
        }
    };

    return (
        <StyledEngineProvider injectFirst>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    color="inherit"
                    position="fixed"
                    sx={{
                        width: "100%",

                        boxShadow: "0px 1px 0px rgba(42, 46, 52, 0.12)",
                        backgroundImage: "none"
                    }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                position: "relative",
                                alignItems: "center"
                            }}
                        >
                            {sideBarMode !== "invisible" && (
                                <CustomIconButton
                                    color="secondary"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={() => handleSideBarToggle("small")}
                                    sx={{
                                        mr: 2,
                                        display: {
                                            xs: "inline-flex",
                                            sm: "inline-flex",
                                            md: "inline-flex",
                                            lg: "none"
                                        }
                                    }}
                                >
                                    <MenuIcon sx={{ color: "#2578ff" }} />
                                </CustomIconButton>
                            )}

                            {sideBarMode !== "invisible" && (
                                <IconButton
                                    color="secondary"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={() => handleSideBarToggle("large")}
                                    onMouseEnter={handleLargeSideBarHoverAction}
                                    onMouseLeave={handleLargeSideBarHoverActionMouseLeave}
                                    sx={{
                                        zIndex: 99,
                                        mr: 2,
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            md: "none",
                                            lg: "inline-flex"
                                        }
                                    }}
                                >
                                    {menuIconShow ? (
                                        <MenuIcon sx={{ color: "secondary.main" }} />
                                    ) : (
                                        <KeyboardDoubleArrowRightIcon
                                            sx={{ color: "secondary.main" }}
                                        />
                                    )}
                                </IconButton>
                            )}

                            <Box sx={{ display: "inline-flex" }}>
                                {true ? (
                                    <Typography variant="h5" color="text.fill">
                                        Mentorship&Feedback
                                    </Typography>
                                ) : (
                                    renderLogo()
                                )}
                            </Box>
                            {sideBarStatusForLargeDevice && sideBarMode !== "invisible" && (
                                <IconButton
                                    sx={{
                                        marginLeft: "16px",
                                        display: {
                                            xs: "none",
                                            sm: "none",
                                            md: "none",
                                            lg: "inline-flex"
                                        }
                                    }}
                                    onClick={handleLargeSideBarClose}
                                >
                                    <KeyboardDoubleArrowLeftIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </StyledEngineProvider>
    );
};

export default TopBar;
