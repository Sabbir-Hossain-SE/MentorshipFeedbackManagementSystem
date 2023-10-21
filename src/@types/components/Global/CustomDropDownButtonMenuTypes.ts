import { MenuItemProps } from "@mui/material";

export type MenuOptions = {
    name: React.ReactNode;
    handleClick: () => void;
    /**
     * Use to apply item is disable or not styling.
     * @default false
     */
    disabled?: boolean;
};
export interface CustomDropDownButtonMenuPropsType extends MenuItemProps {
    buttonContent: React.ReactElement<any, any>;
    /**
     * Use to apply item is disable or not styling.
     * @default false
     */
    disabledStatus?: boolean;
    options: MenuOptions[];
    itemWidth?: string | number;
}
