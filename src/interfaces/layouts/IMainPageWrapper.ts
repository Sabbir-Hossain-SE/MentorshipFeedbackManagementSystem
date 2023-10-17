import { ReactNode } from "react";
import { AppName, ModuleName } from "../../@types/Global";

export interface PropsInterface {
    children: ReactNode;
    pageTitle: string | undefined;
    appName: AppName;
    haveAccess: boolean;
}
