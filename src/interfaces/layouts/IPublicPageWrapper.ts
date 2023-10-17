import { ReactNode } from "react";
import { AppName, ModuleName, SideBarMode } from "../../@types/Global";

export interface PublicPageWrapperPropsInterface {
    children: ReactNode;
    pageTitle?: string | undefined;
    sideBarMode?: SideBarMode; // default | custom
    moduleName?: ModuleName;
    appName?: AppName;
}
