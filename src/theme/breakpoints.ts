import { BreakpointsOptions } from "@mui/material";

const breakpoints = () => {
    return {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1367,
            xl: 1556
        }
    } as BreakpointsOptions;
};
export default breakpoints;
