import { ReactNode } from "react";
import { ModuleName } from "../../@types/Global";

export interface IErrorPageWrapper {
    children: ReactNode;
    pageTitle: string | undefined;
}
