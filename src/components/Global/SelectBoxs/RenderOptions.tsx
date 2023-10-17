import { Checkbox, ListItemIcon, MenuItem } from "@mui/material";
import RenderName from "./RenderName";

const RenderOptions = ({ index, style, data }: any) => {
    const option = data.tempOptions[index];
    return (
        <MenuItem key={`${option.id}`} value={option.id} style={style}>
            <ListItemIcon>
                <Checkbox
                    color="secondary"
                    value={[option.id]}
                    onChange={(e, ch) => data.handleChangeEffect(e, ch)}
                    checked={data.selectedValues?.includes?.(option.id)}
                />
            </ListItemIcon>
            <RenderName name={option.name} nameLength={data.nameLength} />
        </MenuItem>
    );
};

export default RenderOptions;
