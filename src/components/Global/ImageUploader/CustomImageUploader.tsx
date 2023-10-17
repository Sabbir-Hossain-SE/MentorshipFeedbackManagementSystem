/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-destructuring */
import ImageIcon from "@mui/icons-material/Image";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomImageUploaderProps } from "../../@types/CustomImageUploaderTypes";
import CustomButton from "../Buttons/Button/CustomButton";
import CustomConfirmModal from "../ConfirmModal/CustomConfirmModal";
import "./custom.style.css";
import NotificationProvider, { useNotification } from "../Notification/NotificationProvider";
import Notification from "../Notification/Notification";

const CustomImageUploader: React.FC<CustomImageUploaderProps> = ({
    handleLogoUpload,
    setLogoFile,
    imagePath,
    setImagePath,
    setIsDelete,
    isDelete,
    handleRemoveLogo,
    loading,
    title = "",
    subtitle = ""
}) => {
    const dropArea = React.useRef<any>(null);
    const iconRef = React.useRef<any>(null);
    const dragText = React.useRef<any>(null);
    const input = React.useRef<any>(null);
    const orDragTextRef = React.useRef<any>(null);
    const { addNotification } = useNotification();
    let imgFile: Blob;
    React.useEffect(() => {
        if (
            imagePath !== undefined &&
            typeof imagePath !== "undefined" &&
            imagePath !== "" &&
            imagePath !== null
        ) {
            const imgTag = `<img src="${imagePath}" alt="">`;
            dropArea.current.innerHTML = imgTag;
        }
    }, [imagePath]);

    function showFile() {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileURL = fileReader.result;
            const imgTag = `<img src="${fileURL}" alt="">`;
            dropArea.current.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(imgFile);
    }
    const bytesToMb = (bytes: number, decimals = 2) => {
        if (bytes === 0) return 0;
        const dm = decimals < 0 ? 0 : decimals;

        return parseFloat((bytes / 1048576).toFixed(dm));
    };

    const handelFileChooseButton = () => {
        input.current.click();
    };

    function removeFile() {
        dropArea.current.innerHTML = "";
        dropArea.current.classList.remove("active");

        dropArea.current.append(iconRef.current);

        dragText.current.textContent = "Drop your image here";
        dropArea.current.append(dragText.current);

        orDragTextRef.current.textContent = "or";
        dropArea.current.append(orDragTextRef.current);

        dropArea.current.innerHTML +=
            '<button class="browser_btn" tabindex="0" type="button"><h6 class="btn_text">Browse File</h6><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>';
        dropArea.current.onclick = handelFileChooseButton;

        dropArea.current.append(input.current);
    }

    const handleChooseFile = (e: any) => {
        if (typeof e.target.files[0] !== "undefined") {
            const fileType = e.target.files[0].type;
            const checkSize = bytesToMb(e.target.files[0].size);
            const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
            if (validExtensions.includes(fileType) && checkSize < 2.5) {
                imgFile = e.target.files[0];
                dropArea.current.classList.add("active");
                setLogoFile(e.target.files);
                setImagePath(URL.createObjectURL(e.target.files[0]));
                showFile();
            } else if (checkSize > 2.5) {
                addNotification({
                    message: "Size must be less than 2 MB!",
                    type: "error"
                });
                dropArea.current.classList.remove("active");
                dragText.current.textContent = "Drop your image here";
            } else {
                addNotification({
                    message: "Chosen file is not an image!",
                    type: "error"
                });
                dropArea.current.classList.remove("active");
                dragText.current.textContent = "Drop your image here";
            }
        }
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dropArea.current.classList.remove("active");
        dragText.current.textContent = "Drop your image here";
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        dropArea.current.classList.add("active");
        dragText.current.textContent = "Release to Upload File";
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        const fileType = e.dataTransfer.files[0].type;
        const checkSize = bytesToMb(e.dataTransfer.files[0].size);
        const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if (validExtensions.includes(fileType) && checkSize < 2.5) {
            imgFile = e.dataTransfer.files[0];
            setLogoFile(e.dataTransfer.files);
            setImagePath(URL.createObjectURL(imgFile));
            showFile(); // calling function
        } else if (checkSize > 2.5) {
            addNotification({
                message: "Size must be less than 2 MB!",
                type: "error"
            });
            dropArea.current.classList.remove("active");
            dragText.current.textContent = "Drop your image here";
        } else {
            addNotification({
                message: "Chosen file is not an image!",
                type: "error"
            });
            dropArea.current.classList.remove("active");
            dragText.current.textContent = "Drop your image here";
        }
    };

    const renderUploaderComponent = () => {
        return (
            <Grid container spacing={3} sx={{ marginBottom: "24px" }}>
                <Grid item sm={6} md={4}>
                    <Box className="fileUploader">
                        <Box
                            ref={dropArea}
                            className="drag-area"
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={(e) => handleDragOver(e)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            sx={{
                                borderWidth: "1px",
                                borderStyle: "dashed",
                                borderColor: "action.active"
                            }}
                        >
                            <ImageIcon
                                ref={iconRef}
                                sx={{
                                    color: "action.active",
                                    width: "45px",
                                    height: "45px"
                                }}
                            />

                            {/* <header ref={dragText}>Drag & Drop to Upload File</header> */}
                            <Typography
                                component="header"
                                ref={dragText}
                                variant="subtitle2"
                                color="text.secondary"
                            >
                                Drop your image here
                            </Typography>
                            <Typography
                                ref={orDragTextRef}
                                component="header"
                                variant="subtitle2"
                                color="text.secondary"
                            >
                                or
                            </Typography>
                            <CustomButton
                                variant="text"
                                color="info"
                                btnText={"Browse File".toUpperCase()} /* {
                                    <Typography
                                        sx={{ textTransform: "capitalize" }}
                                        variant="subtitle2"
                                    >
                                        Browse File
                                    </Typography>
                                } */
                                handleButton={handelFileChooseButton}
                                size="small"
                            />
                            <input
                                ref={input}
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                onChange={handleChooseFile}
                                hidden
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={6} md={8} className="upload__left__side">
                    <Typography variant="h5" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="h5" color="text.disabled">
                        {subtitle}
                    </Typography>
                    {imagePath !== "" ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "24px"
                            }}
                        >
                            <CustomButton
                                sx={{
                                    marginRight: ".625rem"
                                }}
                                btnText="Remove"
                                color="warning"
                                variant="contained"
                                type="button"
                                handleButton={() => {
                                    setIsDelete(true);
                                }}
                            />
                            <CustomButton
                                btnText={
                                    <Typography
                                        variant="button"
                                        sx={{
                                            fontFamily: "Gotham Pro Medium !important",
                                            fontStyle: "normal !important",
                                            fontWeight: "normal !important",
                                            fontSize: "0.9375rem !important",
                                            lineHeight: "1.625rem !important",
                                            letterSpacing: "0.46px !important",
                                            textTransform: "uppercase !important"
                                        }}
                                    >
                                        Change
                                    </Typography>
                                }
                                loader={loading}
                                variant="contained"
                                type="button"
                                color="secondary"
                                size="large"
                                handleButton={handleLogoUpload}
                            />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                marginTop: "24px"
                            }}
                        >
                            <CustomButton
                                sx={{ marginTop: "3px" }}
                                btnText={
                                    <Typography
                                        variant="button"
                                        sx={{
                                            fontFamily: "Gotham Pro Medium !important",
                                            fontStyle: "normal !important",
                                            fontWeight: "normal !important",
                                            fontSize: "0.9375rem !important",
                                            lineHeight: "1.625rem !important",
                                            letterSpacing: "0.46px !important",
                                            textTransform: "uppercase !important"
                                        }}
                                    >
                                        Upload
                                    </Typography>
                                }
                                variant="contained"
                                type="button"
                                color="secondary"
                                handleButton={handelFileChooseButton}
                            />
                        </Box>
                    )}
                </Grid>
            </Grid>
        );
    };
    return (
        <NotificationProvider>
            <Notification />
            {renderUploaderComponent()}
            <CustomConfirmModal
                title="Are you sure you want To remove this logo?"
                subtitle="If you delete this data, you’ll not be able to recover it again."
                disagreedButtonTitle="NO, KEEP IT"
                agreedButtonTitle="YES, DELETE IT"
                open={isDelete}
                setOpen={() => setIsDelete(false)}
                agreedButtonColor="warning"
                handleSubmit={() => {
                    handleRemoveLogo();
                    removeFile();
                }}
                handleCancel={() => setIsDelete(false)}
            />
        </NotificationProvider>
    );
};

export default CustomImageUploader;
