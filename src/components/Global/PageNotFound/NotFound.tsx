import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Grid, Typography } from "@mui/material";
import NotFoundImage from "assets/images/Error/404.png";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../Buttons/Button/CustomButton";

const NotFound: FC = () => {
    const history = useHistory();
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
                            <img src={NotFoundImage} alt="" />
                            <Typography variant="h3" color="text.fill">
                                Opps! somethings gone missing.... 404
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Sorry, but the page you are looking for was either not found or dose
                                not exist. Try refreshing the page or click the button bellow to go
                                back to the Homepage.{" "}
                            </Typography>
                            <Box sx={{ padding: "0 38%", marginTop: "1rem" }}>
                                <CustomButton
                                    variant="contained"
                                    color="secondary"
                                    btnText="Back to Project"
                                    size="large"
                                    type="submit"
                                    customClass="auth__verification__btn"
                                    handleButton={() => history.push("/")}
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

export default NotFound;
