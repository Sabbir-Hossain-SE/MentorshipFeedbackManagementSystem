import { ChipClasses, ChipProps } from "@mui/material";

export interface CustomBadgeProps extends ChipProps {
    /**
     * Icon element.
     */
    icon?: React.ReactElement;
    /**
     * The content of the component.
     */
    label?: React.ReactNode;

    /**
     * The Avatar element to display.
     */
    avatar?: React.ReactElement;
    /**
     * This prop isn't supported.
     * Use the `component` prop if you need to change the children structure.
     */
    children?: null;
    /**
     * Override or extend the styles applied to the component.
     */
    customClass?: Partial<ChipClasses>;
    /**
     * If `true`, the chip will appear clickable, and will raise when pressed,
     * even if the onClick prop is not defined.
     * If `false`, the chip will not appear clickable, even if onClick prop is defined.
     * This can be used, for example,
     * along with the component prop to indicate an anchor Chip is clickable.
     * Note: this controls the UI and does not affect the onClick event.
     */
    handleClick?: React.EventHandler<any>;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
     * @default 'default'
     */
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: "small" | "medium";

    variant?: "filled" | "outlined";
}
