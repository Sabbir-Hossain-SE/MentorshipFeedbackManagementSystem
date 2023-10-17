import { CustomTheme, useTheme } from "@mui/material";

const useCustomTheme = () => {
    const theme = useTheme<CustomTheme>();
    return theme;
};

export default useCustomTheme;
