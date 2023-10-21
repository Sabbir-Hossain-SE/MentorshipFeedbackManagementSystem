import { SxProps, TabsProps, Theme } from "@mui/material";
import React from "react";

interface TabDataI {
    number?: number;
    label?: string;
}
interface TabPanelDataI {
    number?: number;
    label?: string;
    content?: React.ReactNode;
}
export interface CustomTabsPropsType extends TabsProps {
    drawerOpen?: boolean;
    customClass?: string;
    tabsContainerWidth?: string | number;
    radius?: string;
    tabsVariants?: "standard" | "scrollable" | "fullWidth";
    tabData?: TabDataI[];
    tabPanelData?: TabPanelDataI[];
    panelStyle?: SxProps<Theme>;
    tabStyle?: SxProps<Theme>;
    color?: "inherit" | "primary" | "secondary" | "default";
    activeTab: number;
    setActiveTab: (value: number) => void;
    appBackgroundColor?: string;
    handleTabChange?: (event: any, value: number) => void;
    // setDrawerOpen: (arg0: boolean) => void;
    // customClass?: string;
    // heading: string;
}
