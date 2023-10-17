import { CustomPaletteOptions } from "@mui/material";

export const colorsLight: CustomPaletteOptions = {
    primary: {
        light: "#C3C0FA",
        main: "#5754A3",
        dark: "#1B1464",
        contrastText: "#FFFFFF",
        darkBackground: "#201C56",
        state: {
            containedHoverBackground: "rgba(42, 46, 52, 0.3)",
            outlinedHoverBackground: "rgba(87, 84, 163, 0.1)",
            outlinedRestingHover: "rgba(87, 84, 163, 0.5)"
        },
        shade: {
            12: "rgba(27, 20, 100, 0.12)",
            16: "rgba(27, 20, 100, 0.16)"
        }
    },
    secondary: {
        light: "#DBE2FC",
        main: "#2578FF",
        dark: "#194195",
        contrastText: "#FFFFFF",
        darkBackground: "#2762C2",
        state: {
            containedHoverBackground: "rgba(42, 46, 52, 0.3)",
            outlinedHoverBackground: "rgba(37, 120, 255, 0.1)",
            outlinedRestingHover: "rgba(37, 120, 255, 0.5)"
        },
        shade: {
            12: "rgba(37, 120, 255, 0.12)",
            16: "rgba(37, 120, 255, 0.16)"
        }
    },
    text: {
        primary: "#2A2E34",
        secondary: "rgba(42, 46, 52, 0.6)",
        disabled: "rgba(42, 46, 52, 0.38)",
        info: "#756AEA",
        fill: "#1B1464",
        shade: {
            12: "rgba(42, 46, 52, 0.12)",
            16: "rgba(42, 46, 52, 0.16)"
        }
    },
    error: {
        light: "#F9DADF",
        main: "#DD3C71",
        dark: "#83183F",
        contrastText: "#FFFFFF",
        darkBackground: "#A7385F",
        state: {
            // mixed of rgba(221, 60, 113, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(167, 56, 95, 0.9)",
            outlinedHoverBackground: "rgba(221, 60, 113, 0.1)",
            outlinedRestingHover: "rgba(221, 60, 113, 0.5)"
        },
        alert: {
            // mixed color of rgba(221, 60, 113, 1) & rgba(42, 46, 52, 1)
            background: "rgba(60, 47, 58, 0.9)",
            // mixed color of rgba(221, 60, 113, 1) & rgba(42, 46, 52, 0.6)
            content: "rgba(114, 52, 76, 1)"
        },
        shade: {
            12: "rgba(221, 60, 113, 0.12)",
            16: "rgba(221, 60, 113, 0.16)"
        }
    },
    info: {
        light: "#E3DFFC",
        main: "#756AEA",
        dark: "#2F209F",
        contrastText: "#FFFFFF",
        darkBackground: "#5F58B3",
        state: {
            // mixed color of rgba(117, 106, 234, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(95, 88, 179, 0.9)",
            outlinedHoverBackground: "rgba(117, 106, 234, 0.1)",
            outlinedRestingHover: "rgba(117, 106, 234, 0.5)"
        },
        alert: {
            // mixed color of rgba(117, 106, 234, 1) & rgba(42, 46, 52, 0.6)
            content: "rgba(72, 70, 125, 1)",
            // mixed color of rgba(72, 70, 125, 1) & rgba(42, 46, 52, 0.9)
            background: "rgba(49, 52, 70, 0.9)"
        },
        shade: {
            12: "rgba(117, 106, 234, 0.12)",
            16: "rgba(117, 106, 234, 0.16)"
        }
    },
    success: {
        light: "#99FC80",
        main: "#3ED044",
        dark: "#215219",
        contrastText: "#FFFFFF",
        darkBackground: "",
        state: {
            // mixed color rgba(62, 208, 68, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(56, 159, 63, 0.9)",
            outlinedHoverBackground: "rgba(62, 208, 68, 0.1)",
            outlinedRestingHover: "rgba(62, 208, 68, 0.5)"
        },
        alert: {
            // mixed color of rgba(62, 208, 68, 1) & rgba(42, 46, 52, 0.6)
            content: "rgba(50, 111, 58, 1)",
            // mixed color of rgba(62, 208, 68, 1) & rgba(42, 46, 52, 0.9)
            background: "rgba(44, 62, 54, 0.9)"
        },
        shade: {
            12: "rgba(62, 208, 68, 0.12)",
            16: "rgba(62, 208, 68, 0.16)"
        }
    },
    warning: {
        light: "#F9DCD2",
        main: "#FF5714",
        dark: "#7A2D10",
        contrastText: "#FFFFFF",
        darkBackground: "#BF4B1E",
        state: {
            // mixed color of rgba(255, 87, 20, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(191, 75, 30, 0.9)",
            outlinedRestingHover: "rgba(255, 87, 20, 0.5)",
            outlinedHoverBackground: "rgba(255, 87, 20, 0.1)"
        },
        alert: {
            // mixed color of rgba(127, 62, 39, 1) & rgba(42, 46, 52, 0.8)
            background: "rgba(85, 54, 46, 0.9)",
            // mixed color of rgba(127, 62, 39, 1) & rgba(42, 46, 52, 0.6)
            content: "rgba(127, 62, 39, 1)"
        },
        shade: {
            12: "rgba(255, 87, 20, 0.12)",
            16: "rgba(255, 87, 20, 0.16)"
        }
    },
    divider: "rgba(42, 46, 52, 0.23)",
    action: {
        active: "rgba(42, 46, 52, 0.54)",
        hover: "rgba(37, 120, 255, 0.05)",
        selected: "rgba(42, 46, 52, 0.08)",
        disabled: "rgba(42, 46, 52, 0.26)",
        disabledBackground: "rgba(42, 46, 52, 0.12)",
        focus: "rgba(42, 46, 52, 0.12)"
    },

    background: {
        paper: "#FFFFFF",
        default: "#FAFAFA"
    },
    others: {
        divider: "rgba(42, 46, 52, 0.23)",
        outlinedBorder: "rgba(42, 46, 52, 0.12)",
        standardInputLine: "rgba(42, 46, 52, 0.42)",
        backdropOverlay: "rgba(0, 0, 0, 0.5)",
        ratingActive: "#FBBF24",
        snackbarBackground: "#2A2E34",
        mapGridPoint: "#FFFFFF"
    },
    table: {
        topHeaderBackground: "rgb(238, 245, 255)",
        headerBackground: "rgb(238, 239, 239)",
        rowBackground: "#FFFFFF",
        columnBorder: "#FAFAFA",
        tableBorder: "rgba(229, 229, 230, 1)"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
};

export const colorsDark: CustomPaletteOptions = {
    primary: {
        light: "#4B4896",
        main: "#C3C0FA",
        dark: "#DBE2FC",
        contrastText: "#1B1464",
        darkBackground: "#201C56",
        state: {
            containedHoverBackground: "rgba(42, 46, 52, 0.3)",
            outlinedHoverBackground: "rgba(195, 192, 250, 0.2)",
            outlinedRestingHover: "rgba(195, 192, 250, 0.6)"
        },
        shade: {
            12: "rgba(27, 20, 100, 0.12)",
            16: "rgba(27, 20, 100, 0.16)"
        }
    },
    secondary: {
        light: "#2457C3",
        main: "#B4C5FA",
        dark: "#DBE2FC",
        contrastText: "#002D6E",
        darkBackground: "#2762C2",
        state: {
            containedHoverBackground: "rgba(42, 46, 52, 0.3)",
            outlinedHoverBackground: "rgba(180, 197, 250, 0.2)",
            outlinedRestingHover: "rgba(180, 197, 250, 0.6)"
        },
        shade: {
            12: "rgba(37, 120, 255, 0.12)",
            16: "rgba(37, 120, 255, 0.16)"
        }
    },
    text: {
        primary: "rgba(255, 255, 255, 1)",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        info: "#756AEA",
        fill: "#FFFFFF",
        shade: {
            12: "rgba(42, 46, 52, 0.12)",
            16: "rgba(42, 46, 52, 0.16)"
        }
    },
    error: {
        light: "#A62C55",
        main: "#F4B4C1",
        dark: "#F9DADF",
        contrastText: "#8F003F",
        darkBackground: "#A7385F",
        state: {
            // mixed color of rgba(244, 180, 193, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(184, 140, 151, 0.9)",
            outlinedHoverBackground: "rgba(221, 60, 113, 0.05)",
            outlinedRestingHover: "rgba(221, 60, 113, 0.5)"
        },
        alert: {
            // mixed color of rgba(244, 180, 193, 1) & rgba(255, 255, 255, 0.8)
            background: "rgba(253, 240, 243, 1)",
            // mixed color of rgba(244, 180, 193, 1) & rgba(255, 255, 255, 0.6)
            content: "rgba(251, 225, 230, 1)"
        },
        shade: {
            12: "rgba(221, 60, 113, 0.12)",
            16: "rgba(221, 60, 113, 0.16)"
        }
    },
    info: {
        light: "rgba(85, 74, 195, 1)",
        main: "rgba(196, 192, 250, 1)",
        dark: "rgba(226, 223, 252, 1)",
        contrastText: "#3F2FB1",
        darkBackground: "#5F58B3",
        state: {
            // mixed color of rgba(196, 192, 250, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(150, 148, 191, 1)",
            outlinedHoverBackground: "rgba(196, 192, 250, 0.2)",
            outlinedRestingHover: "rgba(196, 192, 250, 0.6)"
        },
        alert: {
            // mixed color of rgba(196, 192, 250, 1) & rgba(255, 255, 255, 0.6)
            content: "rgba(231, 230, 253, 1)",
            // mixed color of rgba(196, 192, 250, 1) & rgba(255, 255, 255, 0.8)
            background: "rgba(243, 242, 254, 1)"
        },
        shade: {
            12: "rgba(117, 106, 234, 0.12)",
            16: "rgba(117, 106, 234, 0.16)"
        }
    },
    success: {
        light: "rgba(46, 108, 36, 1)",
        main: "rgba(125, 223, 103, 1)",
        dark: "rgba(153, 252, 128, 1)",
        contrastText: "#00530C",
        darkBackground: "",
        state: {
            // mixed color of rgba(125, 223, 103, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(100, 170, 88, 0.9)",
            outlinedHoverBackground: "rgba(125, 223, 103, 0.2)",
            outlinedRestingHover: "rgba(125, 223, 103, 0.6)"
        },
        alert: {
            // mixed color of rgba(125, 223, 103, 1) & rgba(255, 255, 255, 0.6)
            content: "rgba(203, 242, 194, 1)",
            // mixed color of rgba(125, 223, 103, 1) & rgba(255, 255, 255, 0.8)
            background: "rgba(229, 249, 225, 1)"
        },
        shade: {
            12: "rgba(62, 208, 68, 0.12)",
            16: "rgba(62, 208, 68, 0.16)"
        }
    },
    warning: {
        light: "rgba(159, 61, 25, 1)",
        main: "rgba(244, 184, 161, 1)",
        dark: "rgba(249, 220, 210, 1)",
        contrastText: "#842600",
        darkBackground: "#BF4B1E",
        state: {
            // mixed color of rgba(244, 184, 161, 1) & rgba(42, 46, 52, 0.3)
            containedHoverBackground: "rgba(184, 143, 128, 0.9)",
            outlinedHoverBackground: "rgba(244, 184, 161, 0.2)",
            outlinedRestingHover: "rgba(244, 184, 161, 0.6)"
        },
        alert: {
            // mixed color of rgba(244, 184, 161, 1) & rgba(255, 255, 255, 0.6)
            content: "rgba(251, 227, 217, 1)",
            // mixed color of rgba(244, 184, 161, 1) & rgba(255, 255, 255, 0.8)
            background: "rgba(253, 241, 236, 1)"
        },
        shade: {
            12: "rgba(255, 87, 20, 0.12)",
            16: "rgba(255, 87, 20, 0.16)"
        }
    },
    divider: "rgba(255, 255, 255, 0.23)",

    action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(180, 197, 250, 0.05)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)"
    },
    background: {
        paper: "#2E3238",
        default: "#2A2E34"
    },
    others: {
        divider: "rgba(255, 255, 255, 0.23)",
        outlinedBorder: "rgba(255, 255, 255, 0.12)",
        standardInputLine: "rgba(255, 255, 255, 0.42)",
        backdropOverlay: "rgba(0, 0, 0, 0.5)",
        ratingActive: "#FBBF24",
        snackbarBackground: "rgba(255, 255, 255, 1)",
        mapGridPoint: "#2578FF"
    },
    table: {
        topHeaderBackground: "#323441",
        headerBackground: "rgb(57, 60, 66)",
        rowBackground: "#2E3238",
        columnBorder: "#2A2E34",
        tableBorder: "rgba(81, 81, 81, 1)"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
};
