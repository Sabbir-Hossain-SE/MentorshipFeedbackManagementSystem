import { Box } from "@mui/material";
import { CustomWaveLoaderProps } from "../../../@types/CustomWaveLoaderTypes";
import "./waveLoader.style.css";

const CustomWaveLoader: React.FC<CustomWaveLoaderProps> = ({ style }) => {
    return (
        <Box className="loader-wrapper" sx={style}>
            <div className="loader1">
                <Box component="span" />
                <Box component="span" />
                <Box component="span" />
                <Box component="span" />
                <Box component="span" />
            </div>
        </Box>
    );
};

export default CustomWaveLoader;
