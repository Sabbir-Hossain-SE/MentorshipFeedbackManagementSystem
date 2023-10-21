/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { IErrorPageWrapper } from "interfaces/layouts/IErrorPageWrapper";
import { useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import customTheme from "theme/theme";

const ErrorPageWrapper: React.FC<IErrorPageWrapper> = (props) => {
    const { children, pageTitle } = props;
    const [mode] = useState<PaletteMode>("light");

    const defaultClasses = "";
    const classes = defaultClasses;

    const theme = useMemo(customTheme("light"), [mode]);

    // render main page component.
    const renderComponent = () => {
        return children;
    };
    return (
        <HelmetProvider>
            {pageTitle && (
                <Helmet defer={false}>
                    <title>{pageTitle}</title>
                </Helmet>
            )}

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    className={classes}
                    sx={{
                        backgroundColor: "background.default",
                        height: "100vh"
                    }}
                >
                    {renderComponent()}
                </Box>
            </ThemeProvider>
        </HelmetProvider>
    );
};

export default ErrorPageWrapper;
