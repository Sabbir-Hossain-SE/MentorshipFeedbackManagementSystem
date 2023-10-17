import { AppBar, Box, StyledEngineProvider, Tab, Tabs, Typography, useTheme } from "@mui/material";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { CustomTabsPropsType } from "../../@types/CustomTabsTypes";
import { generateRandomString } from "../utils/helperFunction";

interface PanelI {
    children?: React.ReactNode;
    value?: number;
    index?: number;
    panelStyle?: CustomTabsPropsType["panelStyle"];
}
const TabPanel = (props: PanelI) => {
    const { children, value, index, panelStyle, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            sx={{ ...panelStyle }}
            {...other}
        >
            {value === index && children}
        </Box>
    );
};

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}

const CustomTabs: React.FC<CustomTabsPropsType> = ({
    tabData,
    tabPanelData,
    tabsContainerWidth = "100%",
    radius = "4px",
    customClass = "ss",
    color = "primary",
    indicatorColor = "secondary",
    textColor = "secondary",
    appBackgroundColor = "secondary.state.outlinedHoverBackground",
    setActiveTab,
    activeTab,
    panelStyle = {},
    tabStyle = {},
    tabsVariants = "fullWidth",
    handleTabChange,
    ...rest
}) => {
    const defaultClasses = "";
    const classes = `${defaultClasses} ${customClass}`;
    const theme = useTheme();
    // const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: any, newValue: number) => {
        if (setActiveTab !== null) {
            setActiveTab(newValue);
        }
        // setValue(newValue);
        if (typeof handleTabChange === "function") {
            handleTabChange(event, newValue);
        }
    };

    const handleChangeIndex = (index: number) => {
        // setValue(index);
        setActiveTab(index);
    };

    return (
        <StyledEngineProvider injectFirst>
            <Box
                className={classes}
                sx={{
                    borderRadius: radius
                }}
            >
                <AppBar
                    position="static"
                    color={color}
                    sx={{
                        borderRadius: `${radius} ${radius} ${radius} ${radius}`,
                        backgroundColor: appBackgroundColor,
                        boxShadow: "none",
                        justifyContent: "space-between",
                        width: tabsContainerWidth
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleChange}
                        textColor={textColor}
                        variant={tabsVariants}
                        indicatorColor={indicatorColor}
                        aria-label="full width tabs example"
                        sx={tabStyle}
                        {...rest}
                    >
                        {!!tabData &&
                            tabData.map((tab) => (
                                <Tab
                                    key={tab.number + generateRandomString(10)}
                                    sx={{
                                        color: "text.primary",
                                        "&.Mui-selected": { color: "secondary.main" }
                                    }}
                                    label={
                                        <Typography
                                            variant="button"
                                            component="span"
                                            sx={{
                                                fontFamily: "Gotham Pro Medium !important",
                                                fontStyle: "normal !important",
                                                fontWeight: "normal !important",
                                                fontSize: "0.875rem !important",
                                                lineHeight: "1.5rem !important",
                                                textTransform: "uppercase !important"
                                            }}
                                        >
                                            {tab.label}
                                        </Typography>
                                    }
                                    {...a11yProps(tab.number)}
                                />
                            ))}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeTab}
                    onChangeIndex={handleChangeIndex}
                >
                    {!!tabPanelData &&
                        tabPanelData.map((tabPanel) => (
                            <TabPanel
                                panelStyle={panelStyle}
                                key={tabPanel.number + generateRandomString(10)}
                                value={activeTab}
                                index={tabPanel.number}
                                // dir={theme.direction}
                            >
                                {tabPanel.content}
                            </TabPanel>
                        ))}
                </SwipeableViews>
            </Box>
        </StyledEngineProvider>
    );
};

export default CustomTabs;
