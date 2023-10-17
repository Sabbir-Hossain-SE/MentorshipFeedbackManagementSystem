import { createTheme, CustomThemeOptions, PaletteMode, responsiveFontSizes } from "@mui/material";
import breakpoints from "./breakpoints";

import { colorsDark, colorsLight } from "./colors";
import { typographyStyle } from "./fonts";
import tooltip from "./tooltips";

const customTheme = (mode: PaletteMode) => {
    const dark = colorsDark;
    const light = colorsLight;
    const colors = mode === "dark" ? dark : light;
    const themeOptions: CustomThemeOptions = {
        breakpoints: { ...breakpoints() },
        palette: {
            mode,
            ...colors
        },
        typography: typographyStyle,
        components: {
            MuiButton: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontSize: "1rem",
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }
                }
            },
            MuiTextField: {
                variants: [
                    {
                        props: {
                            color: "secondary"
                        },
                        style: {
                            "& .MuiOutlinedInput-root": {
                                // "&:hover fieldset": {
                                //     borderColor: colorsLight().primary.main, // - Set the Input border when parent has :hover
                                // },
                                "&.Mui-focused fieldset": {
                                    // - Set the Input border when parent is focused
                                    borderColor: colors.primary
                                }
                            }
                        }
                    }
                ]
            },

            MuiTooltip: {
                ...tooltip()
            },
            MuiAlert: {
                styleOverrides: {
                    filledSuccess: {
                        color: "#FFFF",
                        backgroundColor: colors.success?.main
                    },
                    filledError: {
                        color: "#FFFF",
                        backgroundColor: colors.error?.main
                    },
                    filledInfo: {
                        color: "#FFFF",
                        backgroundColor: colors.info?.main
                    },
                    filledWarning: {
                        color: "#FFFF",
                        backgroundColor: colors.warning?.main
                    },
                    standardSuccess: {
                        color: colors.warning?.main
                    },
                    standardError: {
                        color: colors.error?.main
                    },
                    standardInfo: {
                        color: colors.info?.main
                    },
                    standardWarning: {
                        color: colors.warning?.main
                    },
                    outlinedSuccess: {
                        color: colors.success?.main,
                        backgroundColor: colors.background.paper
                    },
                    outlinedError: {
                        color: colors.error?.main,
                        backgroundColor: colors.background.paper
                    },
                    outlinedInfo: {
                        color: colors.info?.main,
                        backgroundColor: colors.background.paper
                    },
                    outlinedWarning: {
                        color: colors.warning?.main,
                        backgroundColor: colors.background.paper
                    }
                }
            },

            MuiFormHelperText: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontSize: "0.75rem",
                        margin: "4px 0 0 0"
                    }
                }
            }
        }
    };
    const theme = createTheme(themeOptions);
    return () => responsiveFontSizes(createTheme(theme));
};

export default customTheme;
