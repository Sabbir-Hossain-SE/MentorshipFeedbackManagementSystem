/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

import ClearIcon from "@mui/icons-material/Clear";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {
    Box,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    StyledEngineProvider
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    DynamicSelectBoxProps,
    OptionType
} from "../../../../@types/components/Global/DynamicSelectBoxTypes";
import CustomIconButton from "../../Buttons/IconButton/CustomIconButton";
import RenderName from "../RenderName";
import RenderNoOptionFound from "../RenderNoOptionFound";

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
    // getContentAnchorEl: null,
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

const findDisableItems = (disableItems: any[]) => {
    return disableItems.map((item) => {
        return typeof item === "number" ? item.toString() : item;
    });
};

const DynamicSelectBox = ({
    options,
    label = "label",
    size = "small",
    name = "selectbox",
    register,
    minWidth,
    menuClasses = "",
    customClass = "",
    fieldDisable = false,
    placeholder = "",
    handleChange,
    titleLength = 25,
    searchable = true,
    creatable = false,
    addSearchedOption,
    disableItems = [],
    defaultValue,
    error,
    helperText,
    ...rest
}: DynamicSelectBoxProps) => {
    const defaultClasses = "";
    const styled = `${defaultClasses} ${customClass}`;
    const [tempOptions, setTempOptions] = useState<OptionType[]>(options || []);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<unknown>(
        register?.value ? register?.value : defaultValue || ""
    );
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setTempOptions(options);
    }, [options]);
    /**
     * This function takes an `id` as input and returns the corresponding name from the `options` array.
     * @param id - The ID of the option for which the name needs to be rendered.
     * @returns The name of the option corresponding to the input `id`.
     */
    const renderValue = (id: any): React.ReactNode => {
        const option = options.find((item: OptionType) => item.id === id);
        return option ? option.name : "";
    };

    const handleChangeEvent = useCallback(
        (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
            try {
                const { value } = event.target;
                setSelectedValue(value);
                register?.onChange(event);
                if (typeof handleChange === "function") {
                    handleChange(event, child);
                }
            } catch (e) {
                console.error("Error handling change:", e);
            }
        },
        [handleChange, register]
    );

    const searchOption = useCallback((searchKey: string, array: OptionType[]) => {
        setSearchValue(searchKey);
        setTempOptions(
            array.filter((val: OptionType) =>
                val.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())
            )
        );
    }, []);

    const addOption = useCallback(
        (keyCode: number | string) => {
            try {
                if ((keyCode === 13 || keyCode === "mouseup") && tempOptions.length === 0) {
                    if (typeof addSearchedOption === "function") {
                        addSearchedOption(searchValue);

                        setSearchValue("");
                        setTempOptions(options);
                    } else {
                        console.warn(
                            "Pleaser create a function body and update the options by adding returned searched item"
                        );
                        setSearchValue("");
                        setTempOptions(options);
                    }
                }
            } catch (e) {
                console.error("Error adding option:", e);
            }
        },
        [addSearchedOption, options, searchValue, tempOptions.length]
    );

    const renderSearchBar = useMemo(() => {
        if (searchable) {
            return (
                <Box
                    onKeyDown={(e) => e.stopPropagation()}
                    onMouseUp={(e: any) => (creatable ? addOption(e.type) : "")}
                    sx={{
                        "&.Mui-focusVisible": { backgroundColor: "transparent" },
                        "&:hover": { backgroundColor: "unset" },
                        padding: "0px 10px 10px 10px"
                    }}
                >
                    <OutlinedInput
                        id="outlined-adornment-selectbox"
                        size={size}
                        color="info"
                        value={searchValue}
                        fullWidth
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            searchOption(e.target.value, options)
                        }
                        onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                            creatable ? addOption(e.type) : ""
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                {searchValue ? (
                                    <CustomIconButton
                                        size={size}
                                        handleButton={() => {
                                            setSearchValue("");
                                            setTempOptions(options);
                                            if (inputRef.current) {
                                                inputRef.current.focus(); // Focus on input when clearing search value
                                            }
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
                </Box>
            );
        }
        return null;
    }, [addOption, creatable, options, searchOption, searchValue, searchable, size]);

    const renderCreateOption = useMemo(() => {
        if (searchable && creatable && searchValue && tempOptions.length === 0) {
            return (
                <MenuItem
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    onMouseUp={(e: any) => (creatable ? addOption(e.type) : "")}
                >
                    <ListItemText
                        sx={{
                            padding: "15px 0 0 15px"
                        }}
                        secondary={`Add '${searchValue}'`}
                    />
                </MenuItem>
            );
        }
        return null;
    }, [addOption, creatable, searchValue, searchable, tempOptions.length]);
    const modifiedDisableItems = findDisableItems(disableItems);

    const renderOptions = useMemo(() => {
        return tempOptions.map((option: OptionType) => (
            <MenuItem
                disabled={modifiedDisableItems.includes(option.id.toString())}
                key={`${option.id}`}
                value={option.id}
            >
                <RenderName name={option.name} nameLength={titleLength} />
            </MenuItem>
        ));
    }, [modifiedDisableItems, tempOptions, titleLength]);

    return (
        <StyledEngineProvider injectFirst>
            <FormControl
                sx={{
                    width: "100%",
                    minWidth: minWidth || "200px"
                }}
                error={error}
            >
                <InputLabel
                    id="demo-dynamic-selectbox-label"
                    size={size != "small" ? "normal" : "small"}
                    color="secondary"
                >
                    {label}
                </InputLabel>
                <Select
                    sx={{ width: "100%" }}
                    labelId="demo-dynamic-selectbox-label"
                    input={<OutlinedInput label={label} />}
                    MenuProps={menuClasses ? { className: menuClasses } : MenuProps}
                    renderValue={renderValue}
                    name={name}
                    size={size}
                    color="secondary"
                    displayEmpty={false}
                    value={selectedValue}
                    disabled={fieldDisable}
                    className={styled}
                    placeholder={placeholder}
                    defaultChecked={false}
                    {...register}
                    onChange={handleChangeEvent}
                    {...rest}
                >
                    {renderSearchBar}
                    {renderCreateOption}
                    {renderOptions}
                    {(options?.length === 0 || tempOptions.length === 0) && !creatable && (
                        <RenderNoOptionFound />
                    )}
                </Select>
                {error && helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
            </FormControl>
        </StyledEngineProvider>
    );
};

export default React.memo(DynamicSelectBox);
