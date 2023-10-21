import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Grid, Typography } from "@mui/material";
import ForbiddenImage from "assets/images/Error/Forbidden.png";
import { FC } from "react";
import CustomButton from "../Buttons/Button/CustomButton";

const Forbidden: FC = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "fitContent",
                            width: "100%",
                            textAlign: "center",
                            marginTop: "50px"
                        }}
                    >
                        <Box>
                            <img src={ForbiddenImage} alt="" />
                            <Typography variant="h3" color="text.fill">
                                Opps! We’re sorry, Access denied
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Unlike fine our website was getting old and not in a good way...
                                please check back soon just putting the finishing touches on some
                                pretty awesome updates!
                            </Typography>
                            <Box sx={{ padding: "0 38%", marginTop: "1rem" }}>
                                <CustomButton
                                    variant="contained"
                                    color="secondary"
                                    btnText={
                                        <Typography variant="buttonLarge">
                                            Back to Dashboard
                                        </Typography>
                                    }
                                    size="large"
                                    type="submit"
                                    customClass="auth__verification__btn"
                                    handleButton={() => window.location.replace("/")}
                                    endIcon={<ArrowForwardIcon />}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Forbidden;
