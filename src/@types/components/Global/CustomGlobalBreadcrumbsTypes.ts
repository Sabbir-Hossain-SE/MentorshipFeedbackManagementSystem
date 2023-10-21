import { BreadcrumbsProps } from "@mui/material";
import { ReactNode } from "react";

export type ComponentType = {
    link: string;
    name: string;
    icon?: ReactNode;
};
export interface CustomGlobalBreadcrumbsPropsType extends BreadcrumbsProps {
    components: ComponentType[];
    customClass?: string;
}
