/* eslint-disable react-hooks/exhaustive-deps */
import { PaletteMode, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PublicPageWrapperPropsInterface } from "interfaces/layouts/IPublicPageWrapper";
import customTheme from "theme/theme";

const PublicPageWrapper = (props: PublicPageWrapperPropsInterface) => {
    const { children, pageTitle } = props;
    const [mode] = useState<PaletteMode>("light");
    const theme = useMemo(customTheme("light"), [mode]);
    return (
        <HelmetProvider>
            {pageTitle && (
                <Helmet defer={false}>
                    <title>{pageTitle}</title>
                </Helmet>
            )}
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HelmetProvider>
    );
};

export default PublicPageWrapper;
