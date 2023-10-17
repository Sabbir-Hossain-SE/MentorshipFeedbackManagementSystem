import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    StyledEngineProvider,
    Typography,
    Zoom
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { CustomConfirmModalProps } from "../../@types/CustomConfirmModalTypes";
import CustomButton from "../Buttons/Button/CustomButton";
import "./confirmModal.style.css";

const CustomTransition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Zoom in={true} ref={ref} {...props} />;
});
const CustomConfirmModal: React.FC<CustomConfirmModalProps> = ({
    title,
    subtitle,
    open,
    setOpen,
    children,
    handleSubmit,
    handleCancel,
    agreedButtonTitle,
    disagreedButtonTitle,
    Transition = CustomTransition,
    agreedButtonColor = "success",
    ...rest
}) => {
    return (
        <StyledEngineProvider injectFirst>
            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={open}
                onClose={setOpen}
                aria-labelledby="toaster-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    backgroundColor: "action.disable",
                    "& .MuiDialog-paper": { backgroundImage: "unset !important" }
                }}
                className="custom-dialog-wrapper"
                maxWidth="md" // available size are md = 1024px, lg = 1200px
                {...rest}
            >
                <Box
                    sx={{
                        padding: "40px",
                        borderRadius: "8px",
                        alignContent: "center",
                        width: "100%",
                        maxWidth: "580px"
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "0 70px",
                            flexDirection: "column"
                        }}
                    >
                        <Box sx={{ width: "328px", margin: "0 auto 10px" }}>
                            <Typography
                                align="center"
                                variant="h5"
                                color="text.primary"
                                className="toaster-title"
                            >
                                {title}
                            </Typography>
                        </Box>

                        <Box sx={{ width: "328px", margin: "0 auto" }}>
                            <Typography
                                align="center"
                                variant="body2"
                                color="text.secondary"
                                className="toaster-title"
                            >
                                {subtitle}
                            </Typography>
                        </Box>
                    </Grid>

                    <DialogContent sx={{ paddingY: "30px", paddingX: 0 }}>
                        <DialogContentText id="alert-dialog-description" />
                        <Grid>{children}</Grid>
                    </DialogContent>
                    <DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
                        <CustomButton
                            variant="contained"
                            size="large"
                            color="info"
                            btnText={disagreedButtonTitle}
                            handleButton={handleCancel}
                            endIcon={<CloseIcon />}
                        />
                        <CustomButton
                            variant="contained"
                            color={agreedButtonColor}
                            size="large"
                            endIcon={<DoneIcon />}
                            btnText={agreedButtonTitle}
                            handleButton={handleSubmit}
                        />
                    </DialogActions>
                </Box>
            </Dialog>
        </StyledEngineProvider>
    );
};

export default CustomConfirmModal;
