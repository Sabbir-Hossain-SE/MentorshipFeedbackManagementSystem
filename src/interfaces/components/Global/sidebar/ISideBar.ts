import { SideBarMode } from "../../../../@types/Global";

export interface SideBarProps {
    sideBarMode: SideBarMode;
    drawerWidth: number;
    sideBarStatusForSmallDevice: boolean;
    setSideBarStatusForSmallDevice: (value: boolean) => void;
    sideBarStatusForLargeDevice: boolean;
    setSideBarStatusFormLargeDevice: (value: boolean) => void;
    sideBarStatusOnHoverForLargeDevice: boolean;
    ThemeToggleButton: () => JSX.Element;
}
