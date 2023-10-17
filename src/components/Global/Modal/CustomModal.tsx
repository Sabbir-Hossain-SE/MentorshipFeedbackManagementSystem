import ClearIcon from "@mui/icons-material/Clear";
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { CustomModalProps } from "../../@types/CustomModalTypes";
import CustomIconButton from "../Buttons/IconButton/CustomIconButton";

export interface DialogTitleProps {
    id: string;
    title: string;
    children?: React.ReactNode;
    sx?: React.CSSProperties;
    onClose: () => void;
}
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     "& .MuDialogContent-root": {
//         padding: theme.spacing(2)
//     },
//     "& .MuDialogActions-root": {
//         padding: theme.spacing(1)
//     }
// }));

const BootstrapDialogTitle: React.FC<DialogTitleProps> = (props) => {
    const { children, title, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Typography variant="h5" color="text.primary" component="span">
                    {title || children}
                </Typography>
                {onClose ? (
                    <CustomIconButton
                        handleButton={onClose}
                        aria-label="close"
                        sx={{
                            position: "absolute",
                            right: 24,
                            top: 15,
                            backgroundColor: "action.disabled",
                            color: (theme) => theme.palette.grey[500]
                        }}
                    >
                        <ClearIcon sx={{ color: "action.active" }} />
                    </CustomIconButton>
                ) : null}
            </Box>
        </DialogTitle>
    );
};
const CustomModal: React.FC<CustomModalProps> = ({
    children,
    size = "sm",
    title,
    open,
    setOpen,
    backgroundColor = "",
    customClass = "",
    fullWidth = true,
    fullScreen = false,
    ...rest
}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={fullWidth}
                className={customClass}
                maxWidth={size} // 'sm' || 'md' || 'lg' || 'xl'
                fullScreen={fullScreen}
                sx={{
                    "& .MuiDialog-paper": {
                        backgroundColor,
                        backgroundImage: "unset"
                    }
                }}
                {...rest}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    sx={{
                        backgroundColor: "rgba(37, 120, 255, 0.05)"
                    }}
                    onClose={handleClose}
                    title={title}
                />
                <DialogContent color="info">{children}</DialogContent>
            </Dialog>
        </div>
    );
};
export default CustomModal;
