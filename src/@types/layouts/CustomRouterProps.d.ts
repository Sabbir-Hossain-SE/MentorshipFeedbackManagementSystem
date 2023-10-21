import { RouteProps } from "react-router-dom";
import { ModuleName } from "../Global";

export interface CustomRouterProps extends RouteProps {
    pageTitle?: string | undefined;
    /**
     * Sidebar Mode.
     * @default 'default'
     */
    sideBarMode: SideBarMode;
    featureName: string;
}
export interface CustomRouterPropsPublic extends RouteProps {
    pageTitle?: string | undefined;
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
