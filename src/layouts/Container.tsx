/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Container, Grid } from "@mui/material";
import { ContainerProps } from "../interfaces/layouts/IContainer";

const CustomContainer = (props: ContainerProps) => {
    const { children, customHeader } = props;

    return (
        <Box>
            <Container
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0 !important"
                    // height: "100vh"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        {customHeader && (
                            <Box sx={{ width: 1, mb: "30px" }}>{customHeader || null}</Box>
                        )}
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomContainer;
