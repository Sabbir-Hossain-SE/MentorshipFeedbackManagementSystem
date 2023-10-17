import { Box, Typography } from "@mui/material";

const RenderNoOptionFound = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Typography variant="caption" color="text.secondary">
                No Option available
            </Typography>
        </Box>
    );
};

export default RenderNoOptionFound;
