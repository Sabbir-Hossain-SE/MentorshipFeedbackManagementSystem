import { Box, Grid, Typography } from "@mui/material";
import FeatureCard from "components/FeatureCard/FeatureCard";
import { IFeature } from "interfaces/components/IFeatureCard";
import { FEATURE_LIST } from "utils/Constant/GlobalConstant";
import useDashboard from "./useDashboard";

const Dashboard = () => {
    const { checkHaveAccess } = useDashboard();
    return (
        <Box>
            <Typography variant="subtitle1">User information will be shown here.</Typography>
            <Box mt="32px">
                <Grid container spacing={2}>
                    {FEATURE_LIST.map((feature: IFeature, index: number) => {
                        return (
                            checkHaveAccess(feature.name) && (
                                <Grid key={`feature-${index}`} item xs={3}>
                                    <FeatureCard feature={feature} />
                                </Grid>
                            )
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
