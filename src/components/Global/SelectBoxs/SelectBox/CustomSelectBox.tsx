import { MenuItem, Select, StyledEngineProvider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { CustomSelectBoxProps } from "../../../@types/CustomSelectBoxTypes";
import { generateRandomString } from "../../utils/helperFunction";
import "./custom.style.css";

const CustomSelectBox: React.FC<CustomSelectBoxProps> = ({
    name = "select",
    options,
    value,
    register,
    handleChange = null,
    customClass = "",
    fieldDisable = false,
    handleBlur = null,
    disableItems = [],
    label = "",
    size = "small",
    inputLabelSize = "small",
    defaultValue,
    ...rest
}) => {
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;

    return (
        <StyledEngineProvider injectFirst>
            <FormControl fullWidth sx={{ minWidth: "120px" }}>
                <InputLabel id="demo-simple-select-label" size={inputLabelSize} color="secondary">
                    {label}
                </InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    disabled={fieldDisable || options.length === 0}
                    className={classes}
                    name={name}
                    value={value}
                    label={label}
                    size={size}
                    displayEmpty
                    defaultValue={defaultValue}
                    {...register}
                    onChange={(e, child) => {
                        if (register !== "" && register !== undefined) {
                            register.onChange(e);
                        }
                        if (typeof handleChange === "function") {
                            handleChange(e, child);
                        }
                    }}
                    onBlur={handleBlur}
                    {...rest}
                >
                    {options.map((option) => (
                        <MenuItem
                            disabled={Boolean(disableItems.includes(option.id))}
                            key={option.name + generateRandomString(10)}
                            value={option.id}
                        >
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </StyledEngineProvider>
    );
};

export default CustomSelectBox;
