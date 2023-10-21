import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import CustomIconButton from "components/Global/Buttons/IconButton/CustomIconButton";
import DynamicSelectBox from "components/Global/SelectBoxs/DynamicSelectBox/DynamicSelectBox";
import useAuthentication from "./useAuthentication";

const Authentication = () => {
    const { handleUserSelection, selectedUser, handleAuthentication, engineers } =
        useAuthentication();
    return (
        <Box sx={{ padding: "100px" }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                border={1}
                padding={4}
                sx={{ borderStyle: "dashed", borderRadius: "4px", margin: "80px" }}
            >
                <Typography variant="h3" color="primary.main">
                    Mentorship & Feedback Management System
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    Guide you team mate with awesome tool
                </Typography>
                <Box sx={{ width: "55%", display: "flex", pb: "30px", mt: 0.5 }}>
                    <Box sx={{ width: "100%", margin: "8px" }}>
                        <DynamicSelectBox
                            options={engineers}
                            size="medium"
                            label="Select Engineer"
                            onChange={(event: SelectChangeEvent<unknown>) =>
                                handleUserSelection(event)
                            }
                            value={selectedUser}
                        />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <CustomIconButton
                            onClick={handleAuthentication}
                            size="large"
                            color="primary"
                        >
                            <ArrowForwardIcon />
                        </CustomIconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Authentication;
