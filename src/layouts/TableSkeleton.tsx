import { Box, Grid } from "@mui/material";
import React from "react";
import CustomSkeleton from "../components/Global/Skeleton/CustomSkeleton";

const TableSkeleton: React.FC = () => {
    return (
        <Box sx={{ width: "100%", padding: "20px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box sx={{ width: 1, mb: "30px" }}>
                        <Grid container />
                    </Box>
                    <Box
                        sx={{
                            width: 1,
                            padding: "30px 16px",
                            backgroundColor: "background.paper",
                            borderRadius: "4px"
                        }}
                    >
                        <CustomSkeleton variant="rectangular" height={42} width="100%" />
                        <br />
                        <CustomSkeleton variant="rectangular" height={42} width="100%" />
                        <br />
                        <CustomSkeleton variant="rectangular" height={42} width="100%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TableSkeleton;
