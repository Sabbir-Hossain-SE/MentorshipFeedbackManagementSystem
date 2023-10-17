import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { CustomCircularProgressProps } from "../../../@types/CustomCircularProgressType";

const CustomCircularProgress: React.FunctionComponent<CustomCircularProgressProps> = ({
    color,
    size,
    value,
    variant,
    ...rest
}: CustomCircularProgressProps) => {
    return (
        <Box className="loader-wrapper" sx={{ display: "flex" }}>
            <CircularProgress color={color} size={size} value={value} variant={variant} {...rest} />
        </Box>
    );
};

export default CustomCircularProgress;
