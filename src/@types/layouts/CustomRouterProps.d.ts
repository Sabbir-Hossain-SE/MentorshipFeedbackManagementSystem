import { RouteProps } from "react-router-dom";
import { AppName, ModuleName, SideBarMode } from "../Global";

export interface CustomRouterProps extends RouteProps {
    pageTitle?: string | undefined;
    appName: AppName;
    haveAccess: boolean;
}
export interface CustomRouterPropsPublic extends RouteProps {
    pageTitle?: string | undefined;
    appName?: AppName;
    error?: boolean;
}

export interface IBuilderLayout extends RouteProps {
    pageTitle?: string | undefined;
    moduleName: ModuleName;
    haveAccess: boolean;
}

export interface IErrorLayout extends RouteProps {
    pageTitle?: string | undefined;
}
