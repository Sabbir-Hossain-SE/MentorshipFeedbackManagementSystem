import { SideBarMode } from "../../../../@types/Global";

/* eslint-disable @typescript-eslint/naming-convention */
export interface SingleApp {
    id: number;
    name: string;
    status: number;
    logo: string | undefined;
    dark_logo?: string | undefined;
    app_light_logo?: string | undefined;
    app_dark_logo?: string | undefined;
    app_url: string;
    description?: string | undefined;
    identifier: string;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    subscribed: true;
}

export interface TopBarProps {
    drawerWidth: number;
    sideBarStatusForSmallDevice: boolean;
    sideBarStatusForLargeDevice: boolean;
    setSideBarStatusFormLargeDevice: (value: boolean) => void;
    setSideBarStatusOnHoverForLargeDevice: (value: boolean) => void;
    setSideBarStatusForSmallDevice: (value: boolean) => void;
    sideBarStatusOnHoverForLargeDevice: boolean;
    ThemeToggleButton: () => JSX.Element;
    sideBarMode: SideBarMode;
}

export interface UrsTypes {
    [key: string]: string;
}
