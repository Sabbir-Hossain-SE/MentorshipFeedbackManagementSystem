/* eslint-disable react/no-array-index-key */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomHeaderPropsType } from "../../../@types/components/Global/CustomHeaderTypes";
import { generateRandomString } from "../../../utils/helperFunction";
import GlobalBreadcrumbs from "../Breadcrumbs/GlobalBreadcrumbs";
import CustomButton from "../Buttons/Button/CustomButton";

const CustomHeader: React.FC<CustomHeaderPropsType> = ({
    headerText = "header",
    components,
    buttons = [],
    customStyle,
    ...rest
}) => {
    return (
        <Grid container className={customStyle}>
            <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
                <Typography component="span" variant="h5" color="text.fill">
                    {headerText}
                </Typography>
                <GlobalBreadcrumbs components={components} {...rest} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} sx={{ alignSelf: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: "6px"
                    }}
                >
                    {buttons.map((item, index) => {
                        return (
                            <CustomButton
                                btnText={item.name}
                                title={item.name as string}
                                handleButton={item.action}
                                color={item.color}
                                variant={item.variant ?? "contained"}
                                size={item.size ?? "large"}
                                key={index.toString() + generateRandomString(10)}
                                startIcon={item.startIcon ? item.startIcon : ""}
                                endIcon={item.endIcon ? item.endIcon : ""}
                            />
                        );
                    })}
                </Box>
            </Grid>
        </Grid>
    );
};

export default CustomHeader;
