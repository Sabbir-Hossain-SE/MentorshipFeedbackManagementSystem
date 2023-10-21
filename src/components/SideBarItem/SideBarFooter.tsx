/* eslint-disable no-nested-ternary */
import { Box, Typography } from "@mui/material";
import React from "react";
import useCustomTheme from "theme/useCustomTheme";

type SideBarFooterProps = {
    children: JSX.Element;
};

const SideBarFooter: React.FC<SideBarFooterProps> = ({ children }) => {
    const theme = useCustomTheme();

    return (
        <Box
            className="user_logout"
            sx={{ backgroundColor: "background.paper", position: "fixed", width: "240px" }}
        >
            <Box className="dark_toggle">
                <Typography variant="subtitle2">
                    {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
                </Typography>
                {children}
            </Box>
        </Box>
    );
};

export default SideBarFooter;
