import { ReactNode } from "react";
import { SideBarMode } from "../../@types/Global";

export interface PropsInterface {
    children: ReactNode;
    pageTitle: string | undefined;
    sideBarMode: SideBarMode; // default | custom
}
