import {
    Color,
    Mixins,
    Palette,
    PaletteMode,
    Shadows,
    SystemTheme,
    Transitions,
    ZIndex
} from "@mui/material";
import { Theme, ThemeOptions } from "@mui/material/styles";
import {
    PaletteAugmentColorOptions,
    PaletteTonalOffset,
    TypeDivider
} from "@mui/material/styles/createPalette";
import React from "react";

interface BaseTheme extends SystemTheme {
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndex;
    unstable_strictMode?: boolean;
}
declare module "@mui/material/styles" {
    type CustomPaletteColorOption = {
        state?: {
            containedHoverBackground?: string;
            outlinedHoverBackground?: string;
            outlinedRestingHover?: string;
        };

        shade?: {
            "12"?: string;
            "16"?: string;
        };
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;
        darkBackground: string;
    };
    type CustomColorOption = {
        state?: {
            containedHoverBackground?: string;
            outlinedHoverBackground?: string;
            outlinedRestingHover?: string;
        };

        shade?: {
            "12"?: string;
            "16"?: string;
        };
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;
        darkBackground: string;
        alert: {
            background: string;
            content: string;
        };
    };
    type CustomTextOption = {
        primary: string;
        secondary: string;
        disabled: string;
        info: string;
        fill: string;
        shade?: {
            "12"?: string;
            "16"?: string;
        };
    };
    type TableType = {
        topHeaderBackground: string;
        headerBackground: string;
        rowBackground: string;
        columnBorder: string;
        tableBorder: string;
    };
    type OthersType = {
        divider: string;
        outlinedBorder: string;
        standardInputLine: string;
        backdropOverlay: string;
        ratingActive: string;
        snackbarBackground: string;
        mapGridPoint: string;
    };
    export interface CustomTypeAction {
        active: string;
        hover: string;
        hoverOpacity?: number;
        selected: string;
        selectedOpacity?: number;
        disabled: string;
        disabledOpacity?: number;
        disabledBackground: string;
        focus: string;
        focusOpacity?: number;
        activatedOpacity?: number;
        active: string;
    }
    interface CustomPaletteOptions {
        primary?: CustomPaletteColorOption;
        secondary?: CustomPaletteColorOption;
        info?: CustomColorOption;
        success?: CustomColorOption;
        warning?: CustomColorOption;
        error?: CustomColorOption;
        text: CustomTextOption;
        background: {
            default: string;
            paper: string;
        };
        others: OthersType;
        table: TableType;
        action: CustomTypeAction;
        divider: TypeDivider;
        mode?: PaletteMode;
        contrastThreshold: number;
        tonalOffset: PaletteTonalOffset;
        grey?: Color;
        getContrastText?: (background: string) => string;
        augmentColor?: (options: PaletteAugmentColorOptions) => CustomPaletteColorOption;
    }
    interface CustomTheme extends Theme {
        palette: CustomPaletteOptions;
        components?: Components<Omit<CustomTheme, "components">>;
    }

    interface CustomThemeOptions extends ThemeOptions {
        // status?: {
        //     danger?: string;
        // };
        palette: CustomPaletteOptions;
        mixins?: Mixins;
        shadows?: Shadows;
        transitions?: Transitions;
        typography?: Typography;
        zIndex?: ZIndex;
        unstable_strictMode?: boolean;
    }
    interface TypographyVariants {
        bodyBold1: React.CSSProperties;
        bodyBold2: React.CSSProperties;
        buttonLarge: React.CSSProperties;
        buttonMedium: React.CSSProperties;
        buttonSmall: React.CSSProperties;
        inputLabel: React.CSSProperties;
        helperText: React.CSSProperties;
        inputText: React.CSSProperties;
        avatarInitial: React.CSSProperties;
        chip: React.CSSProperties;
        toolTip: React.CSSProperties;
        alertTitle: React.CSSProperties;
        tableHeader: React.CSSProperties;
        badgeLabel: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        bodyBold1: React.CSSProperties;
        bodyBold2: React.CSSProperties;
        buttonLarge: React.CSSProperties;
        buttonMedium: React.CSSProperties;
        buttonSmall: React.CSSProperties;
        inputLabel: React.CSSProperties;
        helperText: React.CSSProperties;
        inputText: React.CSSProperties;
        avatarInitial: React.CSSProperties;
        chip: React.CSSProperties;
        toolTip: React.CSSProperties;
        alertTitle: React.CSSProperties;
        tableHeader: React.CSSProperties;
        badgeLabel: React.CSSProperties;
    }

    export function createCustomTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module "@mui/material/Typography" {
    interface TypographyVariants {
        bodyBold1: React.CSSProperties;
        bodyBold2: React.CSSProperties;
        buttonLarge: React.CSSProperties;
        buttonMedium: React.CSSProperties;
        buttonSmall: React.CSSProperties;
        inputLabel: React.CSSProperties;
        helperText: React.CSSProperties;
        inputText: React.CSSProperties;
        avatarInitial: React.CSSProperties;
        chip: React.CSSProperties;
        toolTip: React.CSSProperties;
        alertTitle: React.CSSProperties;
        tableHeader: React.CSSProperties;
        badgeLabel: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        bodyBold1: React.CSSProperties;
        bodyBold2: React.CSSProperties;
        buttonLarge: React.CSSProperties;
        buttonMedium: React.CSSProperties;
        buttonSmall: React.CSSProperties;
        inputLabel: React.CSSProperties;
        helperText: React.CSSProperties;
        inputText: React.CSSProperties;
        avatarInitial: React.CSSProperties;
        chip: React.CSSProperties;
        toolTip: React.CSSProperties;
        alertTitle: React.CSSProperties;
        tableHeader: React.CSSProperties;
        badgeLabel: React.CSSProperties;
    }
    interface TypographyPropsVariantOverrides {
        poster: true;
        buttonLarge: true;
        bodyBold1: true;
        bodyBold2: true;
        buttonLarge: true;
        buttonMedium: true;
        buttonSmall: true;
        inputLabel: true;
        helperText: true;
        inputText: true;
        avatarInitial: true;
        chip: true;
        toolTip: true;
        alertTitle: true;
        tableHeader: true;
        badgeLabel: true;
    }
}
