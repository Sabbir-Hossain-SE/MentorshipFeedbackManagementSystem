import { BreadcrumbsProps } from "@mui/material";
import { CustomButtonPropsType } from "./CustomButtonType";

export type HeaderButtons = {
    name: CustomButtonPropsType["btnText"];
    color?: CustomButtonPropsType["color"];
    startIcon?: CustomButtonPropsType["startIcon"];
    endIcon?: CustomButtonPropsType["endIcon"];
    action: CustomButtonPropsType["handleButton"];
    variant?: CustomButtonPropsType["variant"];
    size?: "small" | "medium" | "large";
};
export interface CustomHeaderPropsType extends BreadcrumbsProps {
    components: any[];
    buttons?: HeaderButtons[];
    headerText?: string;
    customStyle?: string;
}
