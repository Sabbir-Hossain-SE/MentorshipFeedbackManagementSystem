/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unstable-nested-components */
import CalendarMonthIcon from "@mui/icons-material/DateRange";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { Box, Stack, StyledEngineProvider, useTheme } from "@mui/material";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { subDays } from "date-fns";
import React, { MouseEvent } from "react";
import { CustomDateRangePickerProps, VariantType } from "../../@types/CustomDateRangePickerTypes";
import CustomButton from "../Buttons/Button/CustomButton";
import CustomTextField from "../TextField/CustomTextField";
import "./custom.style.css";

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
    dateRange,
    setDateRange,
    disabled = false,
    register = null,
    ...rest
}) => {
    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent) => {
        if (disabled === false) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const screenWidth = window.innerWidth;
    const [variant, setVariant] = React.useState<VariantType>({
        today: false,
        yesterday: false,
        lastSevenDays: false,
        lastThirtyDays: false,
        thisMonth: false,
        customRange: true
    });
    const handleChange = (date) => {
        setDateRange(date);
        setVariant({
            today: false,
            yesterday: false,
            lastSevenDays: false,
            lastThirtyDays: false,
            thisMonth: false,
            customRange: true
        });
        // setAnchorEl(null);
    };
    const handleCustomRange = () => {
        setVariant({
            today: false,
            yesterday: false,
            lastSevenDays: false,
            lastThirtyDays: false,
            thisMonth: false,
            customRange: true
        });
    };

    const theme = useTheme();
    const defineBorderColor = () =>
        theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)";

    const handleClickOnToday = () => {
        setDateRange([new Date(), new Date()]);
        setVariant({
            today: true,
            yesterday: false,
            lastSevenDays: false,
            lastThirtyDays: false,
            thisMonth: false
        });
        // setAnchorEl(null);
    };
    const handleClickOnYesterday = () => {
        setDateRange([subDays(new Date(), 1), subDays(new Date(), 1)]);
        setVariant({
            today: false,
            yesterday: true,
            lastSevenDays: false,
            lastThirtyDays: false,
            thisMonth: false
        });
        // setAnchorEl(null);
    };
    const handleClickOnLastSevenDays = () => {
        setDateRange([subDays(new Date(), 6), new Date()]);
        setVariant({
            today: false,
            yesterday: false,
            lastSevenDays: true,
            lastThirtyDays: false,
            thisMonth: false
        });
        // setAnchorEl(null);
    };
    const handleClickOnThirtyDays = () => {
        setDateRange([subDays(new Date(), 29), new Date()]);
        setVariant({
            today: false,
            yesterday: false,
            lastSevenDays: false,
            lastThirtyDays: true,
            thisMonth: false
        });
        // setAnchorEl(null);
    };
    const handleClickOnThisMonth = () => {
        const date = new Date();
        setDateRange([
            new Date(date.getFullYear(), date.getMonth(), 1),
            new Date(date.getFullYear(), date.getMonth() + 1, 0)
        ]);
        setVariant({
            today: false,
            yesterday: false,
            lastSevenDays: false,
            lastThirtyDays: false,
            thisMonth: true
        });
        // setAnchorEl(null);
    };

    return (
        <Box>
            <StyledEngineProvider injectFirst>
                {screenWidth > 1024 && (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDateRangePicker
                            open={open}
                            onClose={handleClose}
                            showToolbar={false}
                            PopperProps={{
                                className: "date-range-wrapper",
                                anchorEl,
                                id: "basic-menu",
                                "aria-labelledby": "basic-button",
                                open
                            }}
                            disabled={disabled}
                            className={`global__datepicker__wrapper ${
                                theme.palette.mode === "light"
                                    ? "datepicker__light"
                                    : "datepicker__dark"
                            }`}
                            value={dateRange}
                            onChange={handleChange}
                            components={{
                                ActionBar: () => (
                                    <Stack
                                        className="custom_action_buttons"
                                        spacing={2}
                                        p={1}
                                        direction="row"
                                    >
                                        <CustomButton
                                            btnText="Today"
                                            handleButton={handleClickOnToday}
                                            variant={variant.today ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Yesterday"
                                            handleButton={handleClickOnYesterday}
                                            variant={variant.yesterday ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Last 7 Days"
                                            handleButton={handleClickOnLastSevenDays}
                                            variant={
                                                variant.lastSevenDays ? "contained" : "outlined"
                                            }
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Last 30 Days"
                                            handleButton={handleClickOnThirtyDays}
                                            variant={
                                                variant.lastThirtyDays ? "contained" : "outlined"
                                            }
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="This Month"
                                            handleButton={handleClickOnThisMonth}
                                            variant={variant.thisMonth ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Custom Range"
                                            handleButton={handleCustomRange}
                                            variant={variant.customRange ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                    </Stack>
                                )
                            }}
                            renderInput={(startProps, endProps) => (
                                <Box
                                    onClick={handleClick}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        border: `1px solid ${defineBorderColor()}`,
                                        borderRadius: "4px",
                                        height: "40px",
                                        "&:hover": {
                                            border: disabled
                                                ? ""
                                                : `1px solid ${theme.palette.text.primary}`, // - Set the Input border when parent has :hover
                                            "& .left-icon": {
                                                borderLeft: disabled
                                                    ? ""
                                                    : `1px solid ${theme.palette.text.primary}`
                                            }
                                        },
                                        "&:focus-within": {
                                            border: disabled
                                                ? ""
                                                : `1px solid ${theme.palette.secondary.main}`, // - Set the Input border when parent is focused
                                            "& .left-icon": {
                                                borderLeft: disabled
                                                    ? ""
                                                    : `1px solid ${theme.palette.secondary.main}`
                                            }
                                            // - Set the Input border
                                        }
                                    }}
                                >
                                    <CustomTextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none"
                                            },
                                            width: "130px"
                                        }}
                                        disabled={disabled}
                                        ref={startProps.inputRef}
                                        {...startProps}
                                        hiddenLabel
                                        label={undefined}
                                        color="secondary"
                                        id="filled-hidden-label-small"
                                    />
                                    <Box
                                        sx={{
                                            marginLeft: "0px",
                                            marginRight: "0px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}
                                    >
                                        <MultipleStopIcon sx={{ color: "action.active" }} />
                                    </Box>
                                    <CustomTextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none"
                                            },
                                            width: "130px"
                                        }}
                                        disabled={disabled}
                                        ref={endProps.inputRef}
                                        {...endProps}
                                        label={undefined}
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                    />
                                    <Box
                                        sx={{
                                            height: "40px",
                                            width: "40px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderLeft: `1px solid ${defineBorderColor()}`
                                        }}
                                        className="left-icon"
                                    >
                                        <CalendarMonthIcon
                                            onClick={handleClick}
                                            sx={{
                                                color: "action.active",
                                                cursor: disabled ? null : "pointer"
                                            }}
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                        />
                                    </Box>
                                </Box>
                            )}
                            {...register}
                            {...rest}
                        />
                    </LocalizationProvider>
                )}

                {screenWidth <= 1024 && (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDateRangePicker
                            open={open}
                            onClose={handleClose}
                            showToolbar={false}
                            DialogProps={{
                                className: "date-range-wrapper",
                                id: "basic-menu",
                                "aria-labelledby": "basic-button",
                                open
                            }}
                            disabled={disabled}
                            className={`global__datepicker__wrapper ${
                                theme.palette.mode === "light"
                                    ? "datepicker__light"
                                    : "datepicker__dark"
                            }`}
                            value={dateRange}
                            onChange={handleChange}
                            components={{
                                ActionBar: () => (
                                    <Stack
                                        className="custom_action_buttons"
                                        spacing={2}
                                        p={1}
                                        direction="row"
                                    >
                                        <CustomButton
                                            btnText="Today"
                                            handleButton={handleClickOnToday}
                                            variant={variant.today ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Yesterday"
                                            handleButton={handleClickOnYesterday}
                                            variant={variant.yesterday ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Last 7 Days"
                                            handleButton={handleClickOnLastSevenDays}
                                            variant={
                                                variant.lastSevenDays ? "contained" : "outlined"
                                            }
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Last 30 Days"
                                            handleButton={handleClickOnThirtyDays}
                                            variant={
                                                variant.lastThirtyDays ? "contained" : "outlined"
                                            }
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="This Month"
                                            handleButton={handleClickOnThisMonth}
                                            variant={variant.thisMonth ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                        <CustomButton
                                            btnText="Custom Range"
                                            handleButton={handleCustomRange}
                                            variant={variant.customRange ? "contained" : "outlined"}
                                            color="secondary"
                                        />
                                    </Stack>
                                )
                            }}
                            renderInput={(startProps, endProps) => (
                                <Box
                                    onClick={handleClick}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        border: `1px solid ${defineBorderColor()}`,
                                        borderRadius: "4px",
                                        height: "40px",
                                        "&:hover": {
                                            border: disabled
                                                ? ""
                                                : `1px solid ${theme.palette.text.primary}`, // - Set the Input border when parent has :hover
                                            "& .left-icon": {
                                                borderLeft: disabled
                                                    ? ""
                                                    : `1px solid ${theme.palette.text.primary}`
                                            }
                                        },
                                        "&:focus-within": {
                                            border: disabled
                                                ? ""
                                                : `1px solid ${theme.palette.secondary.main}`, // - Set the Input border when parent is focused
                                            "& .left-icon": {
                                                borderLeft: disabled
                                                    ? ""
                                                    : `1px solid ${theme.palette.secondary.main}`
                                            }
                                            // - Set the Input border
                                        }
                                    }}
                                >
                                    <CustomTextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none"
                                            },
                                            width: "130px"
                                        }}
                                        disabled={disabled}
                                        ref={startProps.inputRef}
                                        {...startProps}
                                        hiddenLabel
                                        label={undefined}
                                        id="filled-hidden-label-small"
                                        color="secondary"
                                    />
                                    <Box
                                        sx={{
                                            marginLeft: "0px",
                                            marginRight: "0px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}
                                    >
                                        <MultipleStopIcon sx={{ color: "action.active" }} />
                                    </Box>
                                    <CustomTextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none"
                                            },
                                            width: "130px"
                                        }}
                                        disabled={disabled}
                                        label={undefined}
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        {...endProps}
                                        ref={endProps.inputRef}
                                    />
                                    <Box
                                        sx={{
                                            height: "40px",
                                            width: "40px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderLeft: `1px solid ${defineBorderColor()}`
                                        }}
                                        className="left-icon"
                                    >
                                        <CalendarMonthIcon
                                            onClick={handleClick}
                                            sx={{
                                                color: "action.active",
                                                cursor: disabled ? null : "pointer"
                                            }}
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                        />
                                    </Box>
                                </Box>
                            )}
                            {...register}
                            {...rest}
                        />
                    </LocalizationProvider>
                )}
            </StyledEngineProvider>
        </Box>
    );
};

export default CustomDateRangePicker;
