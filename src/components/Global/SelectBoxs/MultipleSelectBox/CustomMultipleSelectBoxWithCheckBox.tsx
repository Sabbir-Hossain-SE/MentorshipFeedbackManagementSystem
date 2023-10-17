/* eslint-disable no-unused-vars */
import {
    Checkbox,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    StyledEngineProvider,
    Theme
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
import { CustomMultipleSelectBoxWithCheckBoxProps } from "../../../@types/CustomMultipleSelectBoxWithCheckBoxTypes";
import CustomTooltip from "../../Tooltip/CustomTooltip";
import { generateRandomString } from "../../utils/helperFunction";

const CustomMultipleSelectBoxWithCheckBox: React.FC<CustomMultipleSelectBoxWithCheckBoxProps> = ({
    name = "select",
    options,
    register = "",
    customClass = "",
    defaultValue = [],
    fieldDisable = false,
    menuClasses = "",
    placeholder = "",
    label = "",
    selectedValue = [],
    setSelectedValue,
    handleChange = null,
    titleLength = 25,
    size = "small",
    color = "secondary",
    selectAll = true,
    inputLabelSize,
    ...rest
}) => {
    // Please assign your default style classes which are include in style file
    // custom_textfield

    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    const styled = makeStyles((theme: Theme) => ({
        formControl: {
            margin: theme.spacing(1)
            // width: 300,
        },
        indeterminateColor: {
            // color: "#f50057",
        },
        selectAllText: {
            fontWeight: 500
        },
        selectedAll: {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)"
            }
        }
    }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 200
            }
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
    const isAllSelected = options?.length > 0 && selectedValue?.length === options?.length;

    const renderValue = () => {
        const data: string[] = [];
        for (let index = 0; index < options.length; index++) {
            if (defaultValue.includes(options[index].id)) {
                data.push(options[index].name);
            }
        }
        // options.map((item) => {
        //     if (defaultValue.includes(item.id)) {

        //     }
        // });

        return data.join(",");
    };

    const renderName = (name: string) => {
        if (name?.length > titleLength) {
            // name.substring(0,15)+"..."
            return (
                <CustomTooltip title={name} placement="top-start">
                    <ListItemText primary={`${name.substring(0, titleLength)}...`} />
                </CustomTooltip>
            );
        }

        return <ListItemText primary={name} />;
    };

    const handleChangeEvent = (event: SelectChangeEvent<typeof selectedValue>) => {
        const { value } = event.target;
        let allCheckedValues: any[] = [];
        if (value[value.length - 1] === "all") {
            for (let index = 0; index < options.length; index += 1) {
                allCheckedValues.push(options[index].id);
            }
            setSelectedValue(selectedValue.length === options.length ? [] : allCheckedValues);
            if (typeof handleChange === "function") {
                handleChange(allCheckedValues);
            }

            return;
        }
        setSelectedValue(typeof value === "string" ? value.split(",") : value);
        allCheckedValues = typeof value === "string" ? value.split(",") : value;
        if (typeof handleChange === "function") {
            handleChange(allCheckedValues);
        }
    };
    return (
        <StyledEngineProvider injectFirst>
            <FormControl
                sx={{
                    width: "100%",
                    minWidth: "200px"
                }}
            >
                <InputLabel id="demo-multiple-checkbox-label" size={inputLabelSize} color={color}>
                    {label}
                </InputLabel>
                <Select
                    sx={{ width: "100%" }}
                    abelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    disabled={fieldDisable}
                    className={classes}
                    value={selectedValue}
                    input={<OutlinedInput label={label} />}
                    MenuProps={
                        menuClasses !== "" && menuClasses != null && menuClasses !== undefined
                            ? { className: menuClasses }
                            : MenuProps
                    }
                    name={name}
                    placeholder={placeholder}
                    size={size}
                    color={color}
                    displayEmpty
                    defaultValue={defaultValue}
                    onChange={handleChangeEvent}
                    renderValue={renderValue}
                    multiple
                    {...register}
                    {...rest}
                >
                    {options?.length > 0 && selectAll ? (
                        <MenuItem
                            value="all"
                            classes={{
                                root: isAllSelected ? styled().selectedAll : ""
                            }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    classes={{ indeterminate: styled().indeterminateColor }}
                                    color={color}
                                    checked={isAllSelected}
                                    indeterminate={
                                        defaultValue.length > 0 &&
                                        defaultValue.length < options.length
                                    }
                                />
                            </ListItemIcon>
                            <ListItemText
                                classes={{ primary: styled().selectAllText }}
                                primary="Select All"
                            />
                        </MenuItem>
                    ) : null}

                    {options?.length > 0 &&
                        options.map((option) => (
                            <MenuItem
                                key={option.name + generateRandomString(10)}
                                value={option.id}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        color={color}
                                        checked={defaultValue.indexOf(option.id) > -1}
                                    />
                                </ListItemIcon>
                                {renderName(option.name)}
                            </MenuItem>
                        ))}
                    {options?.length === 0 && (
                        <MenuItem>
                            <ListItemText
                                secondary={
                                    label !== "" ? `${label} not available` : "Option not available"
                                }
                            />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </StyledEngineProvider>
    );
};

export default CustomMultipleSelectBoxWithCheckBox;
