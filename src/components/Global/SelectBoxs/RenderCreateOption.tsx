import { ClassNameMap, ListItemText, MenuItem } from "@mui/material";
import React from "react";

interface IRenderCreateOption {
    classes: ClassNameMap<"selectAllText">;
    value: string;
    addOption: (key: number | string) => void;
}
const RenderCreateOption: React.FC<IRenderCreateOption> = ({ classes, value, addOption }) => {
    return (
        <MenuItem onKeyDown={(e) => e.stopPropagation()} onMouseUp={(e: any) => addOption(e.type)}>
            <ListItemText
                classes={{ primary: classes.selectAllText }}
                secondary={`Add '${value}'`}
            />
        </MenuItem>
    );
};

export default RenderCreateOption;
