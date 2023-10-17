/* eslint-disable no-param-reassign */
import ClearIcon from "@mui/icons-material/Clear";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {
    Box,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    ListItemIcon,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    StyledEngineProvider
} from "@mui/material";
import React, { useState } from "react";
import { ModifiedSelectBoxPropsType, OptionType } from "../../../@types/ModifiedSelectBoxTypes";
import CustomIconButton from "../../Buttons/IconButton/CustomIconButton";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps: object = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200
        },
        autoFocus: false
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

const ModifiedSelectBox = ({
    options,
    value,
    defaultValue,
    handleChange = null,
    handleBlur = null,
    disableItems = [],
    label = "label",
    size = "small",
    name = "selectbox",
    register,
    menuClasses = "",
    customClass = "",
    fieldDisable = false,
    placeholder = "",
    titleLength = 25,
    inputLabelSize = "small",
    searchable = true,
    creatable = false,
    addSearchedOption,
    error,
    helperText,
    ...rest
}: ModifiedSelectBoxPropsType) => {
    const defaultClasses = "";
    const styled = `${defaultClasses} ${customClass}`;
    const [tempOptions, setTempOptions] = useState<OptionType[]>(options);
    const [searchValue, setSearchValue] = useState<string>("");

    const renderValue = (id: number | string): React.ReactNode => {
        return options.map((item: OptionType) => {
            if (item.id === id) {
                return (
                    <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                        {item?.icon ? (
                            <Box sx={{ maxHeight: "23px", marginRight: ".5rem" }}>{item.icon}</Box>
                        ) : null}
                        {item.name}
                    </Box>
                );
            }

            return "";
        });
    };

    const searchOption = (searchKey: string, array: OptionType[]) => {
        setSearchValue(searchKey);
        setTempOptions(
            array.filter((val: OptionType) =>
                val.name.toLowerCase().trim().includes(searchKey.toLowerCase().trim())
            )
        );
    };

    const addOption = async (keyCode: number | string) => {
        if ((keyCode === 13 || keyCode === "mouseup") && tempOptions.length === 0) {
            if (typeof addSearchedOption === "function") {
                const updatedOptions = await addSearchedOption(searchValue);

                setSearchValue("");
                options = updatedOptions;
                setTempOptions(updatedOptions);
            } else {
                console.warn(
                    "Pleaser create a function body and update the options by adding returned searched item"
                );
                setSearchValue("");
                setTempOptions(options);
            }
        }
    };

    const renderSearchBar = () => {
        return (
            <MenuItem
                onKeyDown={(e) => e.stopPropagation()}
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
                    onKeyUp={(e: any) => addOption(e.keyCode)}
                    onKeyDown={(e) => e.stopPropagation()}
                    onChange={(e: any) => searchOption(e.target.value, options)}
                    endAdornment={
                        <InputAdornment position="end">
                            {searchValue ? (
                                <CustomIconButton
                                    size={size}
                                    handleButton={() => {
                                        setSearchValue("");
                                        setTempOptions(options);
                                    }}
                                >
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

    // const renderClearIcon = () => {
    //     if (selectedValue) {
    //         return (
    //             <CustomIconButton
    //                 sx={{ right: "32px" }}
    //                 handleButton={(e) => {
    //                     e.stopPropagation();
    //                 }}
    //                 size={size}
    //             >
    //                 <ClearIcon fontSize={size} />
    //             </CustomIconButton>
    //         );
    //     }
    // };

    const renderCreateOption = () => {
        return (
            <MenuItem
                onKeyDown={(e) => e.stopPropagation()}
                onMouseUp={(e: any) => addOption(e.type)}
            >
                <ListItemText secondary={`Add '${searchValue}'`} />
            </MenuItem>
        );
    };

    const renderOptions = () => {
        return tempOptions.map((option: OptionType) => (
            <MenuItem
                onKeyDown={(e) => e.stopPropagation()}
                disabled={
                    !!disableItems.includes(
                        typeof option.id === "number" ? option.id.toString() : option.id
                    )
                }
                key={option.name}
                value={option.id}
            >
                <ListItemText primary={option.name} />
                {option?.icon ? <ListItemIcon>{option.icon}</ListItemIcon> : null}
            </MenuItem>
        ));
    };

    const renderNoOptionFound = () => {
        return (
            <MenuItem>
                <ListItemText
                    secondary={label ? `${label}s  not available` : "No option available"}
                />
            </MenuItem>
        );
    };

    return (
        <StyledEngineProvider injectFirst>
            <FormControl
                sx={{
                    width: "100%",
                    minWidth: "200px"
                }}
                error={error}
            >
                <InputLabel id="demo-dynamic-selectbox-label" size="small" color="secondary">
                    {label}
                </InputLabel>
                <Select
                    sx={{ width: "100%" }}
                    labelId="demo-dynamic-selectbox-label"
                    id="dynamic-selectbox"
                    input={<OutlinedInput label={label} size={size} />}
                    value={value}
                    MenuProps={
                        menuClasses !== "" &&
                        menuClasses != null &&
                        typeof menuClasses !== "undefined"
                            ? { className: menuClasses }
                            : MenuProps
                    }
                    renderValue={renderValue}
                    name={name}
                    size={size}
                    color="secondary"
                    displayEmpty={false}
                    defaultValue={defaultValue}
                    disabled={fieldDisable}
                    className={styled}
                    placeholder={placeholder}
                    onKeyDown={(e) => e.stopPropagation()}
                    // endAdornment={renderClearIcon()}
                    {...register}
                    onChange={(e, child) => {
                        if (register) {
                            register.onChange(e);
                        }
                        if (typeof handleChange === "function") {
                            handleChange(e, child);
                        }
                    }}
                    onBlur={handleBlur}
                    {...rest}
                >
                    {searchable ? renderSearchBar() : null}

                    {searchable && creatable && searchValue && tempOptions.length === 0
                        ? renderCreateOption()
                        : null}
                    {renderOptions()}
                    {options?.length === 0 && renderNoOptionFound()}
                </Select>
                {error && helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
            </FormControl>
        </StyledEngineProvider>
    );
};

export default ModifiedSelectBox;
