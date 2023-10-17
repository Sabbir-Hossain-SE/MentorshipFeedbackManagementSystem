import React from "react";
import { InputAdornment, InputBaseProps, MenuItem, OutlinedInput } from "@mui/material";
import { debounce } from "lodash";
import ClearIcon from "@mui/icons-material/Clear";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { OptionType } from "../../@types/DynamicMultiSelectBoxTypes";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";

interface IRenderSearchBar {
    creatable: boolean;
    searchValue: string;
    options: OptionType[];
    size?: InputBaseProps["size"];
    addOption: (key: number | string) => void;
    handleSearchOption: (searchKey: string, array: OptionType[]) => void;
    handleClearSearch: () => void;
}
const RenderSearchBar: React.FC<IRenderSearchBar> = ({
    creatable,
    searchValue,
    size,
    options,
    addOption,
    handleSearchOption,
    handleClearSearch
}) => {
    const debouncedSearchOption = debounce(handleSearchOption, 300);
    return (
        <MenuItem
            onKeyDown={(e) => e.stopPropagation()}
            onMouseUp={(e: any) => (creatable ? addOption(e.type) : "")}
            disableRipple
            disableTouchRipple
            sx={{
                "&.Mui-focusVisible": { backgroundColor: "transparent" },
                "&:hover": { backgroundColor: "unset" }
            }}
        >
            <OutlinedInput
                id="outlined-adornment-selectbox"
                size={size}
                color="info"
                value={searchValue}
                fullWidth
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                    creatable ? addOption(e.type) : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    debouncedSearchOption(e.target.value, options)
                }
                endAdornment={
                    <InputAdornment position="end">
                        {searchValue ? (
                            <CustomIconButton size={size} handleButton={handleClearSearch}>
                                <ClearIcon fontSize="medium" />
                            </CustomIconButton>
                        ) : (
                            <ManageSearchIcon fontSize="medium" />
                        )}
                    </InputAdornment>
                }
            />
        </MenuItem>
    );
};

export default RenderSearchBar;
