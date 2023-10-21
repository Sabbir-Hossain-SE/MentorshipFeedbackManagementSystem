import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { CustomToolTipProps } from "../../../@types/components/Global/CustomTooltipsType";

const CustomTooltip: React.FunctionComponent<CustomToolTipProps> = ({
    children,
    title,
    placement,
    ...rest
}) => {
    // const { children, title, ...rest } = props;
    return (
        <Tooltip placement={placement} arrow title={title} {...rest}>
            {children}
        </Tooltip>
    );
};
export default CustomTooltip;
