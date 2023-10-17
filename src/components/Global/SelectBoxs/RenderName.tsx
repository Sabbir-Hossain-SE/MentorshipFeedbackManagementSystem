import React from "react";
import { ListItemText, Typography } from "@mui/material";
import CustomTooltip from "../Tooltip/CustomTooltip";

interface IRenderName {
    nameLength: number;
    name: string | number;
}
const RenderName: React.FC<IRenderName> = ({ name, nameLength }) => {
    const showTooltip: boolean = name?.toString().length > nameLength;
    return (
        <>
            {showTooltip && (
                <CustomTooltip title={name} placement="top-start">
                    <ListItemText
                        primary={
                            <Typography noWrap overflow="hidden">
                                {name}
                            </Typography>
                        }
                    />
                </CustomTooltip>
            )}
            {!showTooltip && <ListItemText primary={name} />}
        </>
    );
};

export default RenderName;
