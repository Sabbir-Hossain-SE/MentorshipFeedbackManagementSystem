import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import FeatureCard from "components/FeatureCard/FeatureCard";
import { IFeature } from "interfaces/components/IFeatureCard";
import { FEATURE_LIST } from "utils/Constant/GlobalConstant";
import useHome from "./useHome";

const Home = () => {
    const { handleStatusChange, engineers, loginUser, checkHaveAccess } = useHome();
    return (
        <Box sx={{ height: "100vh", padding: "100px" }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                border={1}
                padding={4}
                sx={{ borderStyle: "dashed", borderRadius: "4px" }}
            >
                <Box sx={{ width: "100%", pb: "30px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-engineer-label">Select Engineer</InputLabel>
                        <Select
                            labelId="select-engineer-label"
                            id="select-engineer"
                            label="Select Engineer"
                            onChange={(e: any) => handleStatusChange(e)}
                        >
                            {engineers.map((engineer, index) => (
                                <MenuItem key={`engineer-${engineer.id}`} value={engineer.id}>
                                    {engineer.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    {loginUser ? (
                        <Grid container spacing={2}>
                            {FEATURE_LIST.map((feature: IFeature, index: number) =>
                                checkHaveAccess(feature.name) ? (
                                    <Grid key={`feature-${index}`} item xs={4}>
                                        <FeatureCard feature={feature} />
                                    </Grid>
                                ) : null
                            )}
                        </Grid>
                    ) : (
                        <Typography variant="alertTitle">No User Selected Yet!</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
