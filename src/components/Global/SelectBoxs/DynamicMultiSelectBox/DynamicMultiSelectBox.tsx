/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return  */

import ClearIcon from "@mui/icons-material/Clear";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {
    Box,
    Checkbox,
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
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DynamicMultiSelectBoxProps, OptionType } from "../../../@types/DynamicMultiSelectBoxTypes";
import CustomIconButton from "../../Buttons/IconButton/CustomIconButton";
import RenderName from "../RenderName";
import RenderNoOptionFound from "../RenderNoOptionFound";
import useStyles from "./useStyle";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps: object = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
            overflowY: "auto"
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

const DynamicMultiSelectBox = ({
    defaultValue = [],
    options,
    selectAll = true,
    label = "label",
    size = "small",
    name = "selectbox",
    register,
    error,
    customClass = "",
    fieldDisable = false,
    menuClasses = "",
    placeholder = "",
    handleChange,
    titleLength = 25,
    inputLabelSize = "small",
    searchable = true,
    creatable = false,
    addSearchedOption,
    helperText,
    clearable = true,
    ...rest
}: DynamicMultiSelectBoxProps) => {
    const defaultClasses = "";
    const styled = `${defaultClasses} ${customClass}`;
    const optionRef = useRef<OptionType[]>([]);
    const classes = useStyles();

    const [tempOptions, setTempOptions] = useState<OptionType[]>(options || []);

    const [selectedValue, setSelectedValue] = useState<any[]>(
        register?.value ? register?.value : defaultValue || []
    );

    const isAllSelected: boolean =
        options && options.length > 0 && selectedValue.length === options.length;

    const [searchValue, setSearchValue] = useState<string>("");

    //     const handleScroll = () => {
    //         if (selectMenuRef.current) {
    //             // Access scroll position relative to the select menu
    //             const scrollY = selectMenuRef.current.scrollTop;
    //             console.log("Scroll position:", scrollY);
    //         }
    //     };

    //     if (selectMenuRef.current) {
    //         // Add the scroll event listener to the select menu
    //         selectMenuRef.current.addEventListener("scroll", handleScroll);

    //         // Remove the scroll event listener when the component unmounts
    //         return () => {
    //             selectMenuRef.current.removeEventListener("scroll", handleScroll);
    //         };
    //     }
    // }, []);

    useEffect(() => {
        setTempOptions(options);

        if (options.length > 0) {
            if (optionRef.current.length > 0) {
                if (clearable) {
                    setSelectedValue([]);
                } else {
                    setSelectedValue(register?.value ? register?.value : selectedValue);
                }
            } else {
                optionRef.current = options;
                const tempValues = register?.value || defaultValue;

                const filteredValues: OptionType[] = tempValues.filter((item: number) => {
                    const foundOption = options.find((option) => {
                        return option.id === item;
                    });
                    return foundOption !== undefined;
                });
                setSelectedValue(filteredValues);
            }
        } else {
            setSelectedValue([]);
        }
    }, [options]);

    const handleChangeEffect = useCallback(
        (event: any, child: React.ReactNode) => {
            try {
                const { value } = event.target;
                const allCheckedValues: string[] = [];
                if (value[value.length - 1] === "all") {
                    for (let index = 0; index < tempOptions.length; index += 1) {
                        allCheckedValues.push(tempOptions[index].id);
                    }
                    setSelectedValue(
                        selectedValue.length === tempOptions.length ? [] : allCheckedValues
                    );
                    if (typeof handleChange === "function") {
                        handleChange(
                            selectedValue.length === tempOptions.length
                                ? { ...event, target: { ...event.target, value: [] } }
                                : {
                                      ...event,
                                      target: { ...event.target, value: allCheckedValues }
                                  },
                            child
                        );
                    }

                    register?.onChange(
                        selectedValue.length === tempOptions.length
                            ? { ...event, target: { ...event.target, value: [] } }
                            : { ...event, target: { ...event.target, value: allCheckedValues } }
                    );

                    return;
                }

                setSelectedValue(value);

                if (typeof handleChange === "function") {
                    handleChange(event, child);
                }

                register?.onChange(event);
            } catch (e) {
                console.error("Error handling change:", error);
            }
        },
        [tempOptions, selectedValue, handleChange, register]
    );

    const searchOption = useCallback((searchKey: string, array: OptionType[]) => {
        const lowerCaseSearchKey = searchKey.trim().toLowerCase();
        setSearchValue(lowerCaseSearchKey);

        setTempOptions(
            array.filter((val: OptionType) =>
                val.name.trim().toLowerCase().includes(lowerCaseSearchKey)
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
        [searchValue, tempOptions, addSearchedOption, options]
    );

    const renderValue = (): string => {
        const selectedOptions = options.filter((option) => selectedValue.includes(option.id));
        const selectedNames = selectedOptions.map((option) => option.name);
        return selectedNames.join(",");
    };
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
                        onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                            creatable ? addOption(e.type) : ""
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            searchOption(e.target.value, options)
                        }
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
                </Box>
            );
        }
        return null;
    }, [searchValue, size, creatable, addOption]);

    const renderCreateOption = useMemo(() => {
        if (searchable && creatable && searchValue && tempOptions.length === 0) {
            return (
                <MenuItem
                    onKeyDown={(e) => e.stopPropagation()}
                    onMouseUp={(e: any) => addOption(e.type)}
                >
                    <ListItemText
                        sx={{
                            padding: "15px 0 0 15px"
                        }}
                        classes={{ primary: classes.selectAllText }}
                        secondary={`Add '${searchValue}'`}
                    />
                </MenuItem>
            );
        }
        return null;
    }, [searchable, creatable, searchValue, tempOptions.length]);

    const renderAllSelectOption = useMemo(() => {
        if (tempOptions?.length > 0 && selectAll) {
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
                            indeterminate={isAllSelected && selectedValue.length < options.length}
                        />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.selectAllText }}
                        primary="Select All"
                    />
                </MenuItem>
            );
        }
        return null;
    }, [isAllSelected, classes, tempOptions, selectedValue]);

    const renderOptions = useMemo(() => {
        return tempOptions.map((option) => (
            <MenuItem key={`${option.id}`} value={option.id}>
                <ListItemIcon>
                    <Checkbox color="secondary" checked={selectedValue.includes(option.id)} />
                </ListItemIcon>
                <RenderName name={option.name} nameLength={titleLength} />
            </MenuItem>
        ));
    }, [tempOptions, selectedValue, titleLength]);

    return (
        <StyledEngineProvider injectFirst>
            <FormControl
                sx={{
                    width: "100%",
                    minWidth: "200px"
                }}
                error={error}
            >
                <InputLabel id="multiple-checkbox-label" size="small" color="secondary">
                    {label}
                </InputLabel>
                <Select
                    sx={{ width: "100%", overflow: "auto" }}
                    labelId="multiple-checkbox-label"
                    id="multi-selectbox"
                    multiple
                    input={<OutlinedInput label={label} />}
                    renderValue={renderValue}
                    MenuProps={menuClasses ? { className: menuClasses } : MenuProps}
                    name={name}
                    size={size}
                    color="secondary"
                    disabled={fieldDisable}
                    className={styled}
                    placeholder={placeholder}
                    displayEmpty={false}
                    {...register}
                    onChange={handleChangeEffect}
                    value={selectedValue}
                    {...rest}
                >
                    {renderSearchBar}

                    {renderCreateOption}
                    {renderAllSelectOption}

                    {renderOptions}

                    {(options?.length === 0 ||
                        selectedValue.length > 0 ||
                        tempOptions.length === 0) &&
                        !creatable && <RenderNoOptionFound />}
                </Select>
                {error && helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
            </FormControl>
        </StyledEngineProvider>
    );
};

export default React.memo(DynamicMultiSelectBox);
