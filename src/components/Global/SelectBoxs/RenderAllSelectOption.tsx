import { Checkbox, ClassNameMap, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";

interface IRenderAllSelectOption {
    classes: ClassNameMap<"indeterminateColor" | "selectedAll" | "selectAllText">;
    isAllSelected: boolean;
    indeterminate: boolean;
}
const RenderAllSelectOption: React.FC<IRenderAllSelectOption> = ({
    classes,
    isAllSelected,
    indeterminate
}) => {
    return (
        <MenuItem
            onKeyDown={(e) => e.stopPropagation()}
            value="all"
            classes={{
                root: isAllSelected ? classes.selectedAll : ""
            }}
        >
            <ListItemIcon>
                <Checkbox
                    classes={{ indeterminate: classes.indeterminateColor }}
                    color="secondary"
                    checked={isAllSelected}
                    indeterminate={indeterminate}
                />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.selectAllText }} primary="Select All" />
        </MenuItem>
    );
};

export default RenderAllSelectOption;
