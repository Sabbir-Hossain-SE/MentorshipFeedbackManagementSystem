import { BoxProps, DrawerProps } from "@mui/material";

export interface CustomDrawerPropsType extends DrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: (arg0: boolean) => void;
    customClass?: string;
    heading: string;
}

export interface CustomDrawerV2PropsType extends DrawerProps {
    heading: React.ReactNode;
    closeButton?: React.ReactNode;
    onCloseDrawer: (arg: boolean) => void;
    /**
     * Top Position.
     * @default '64px'
     */
    top?: number | string;
    drawerBodySx?: BoxProps["sx"];
    /**
     * Drawer Width.
     * @default '850px'
     */
    width?: number | string;
    /**
     * Drawer Minimum Width.
     * @default '850px'
     */
    minWidth?: number | string;
    /**
     * Drawer Maximum Width.
     * @default '850px'
     */
    maxWidth?: number | string;
}
