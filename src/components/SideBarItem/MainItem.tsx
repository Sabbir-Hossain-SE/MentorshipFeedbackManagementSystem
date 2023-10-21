import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FeedbackIcon from "@mui/icons-material/Feedback";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CustomButton from "components/Global/Buttons/Button/CustomButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "statemanagement/features/auth/authSlice";
import {
    FEEDBACK,
    MENTORSHIP,
    PERFORMANCE_REVIEW,
    ROLE_ACCESS,
    RoleNameType
} from "utils/Constant/GlobalConstant";

const MainItem = () => {
    const history = useHistory();
    const [activeRoute, setActiveRoute] = useState("");
    const user = useSelector(getUser);
    const index = user.designation as RoleNameType;
    const handleMenuClick = (route: string) => {
        history.push(route);
        setActiveRoute(route);
    };
    useEffect(() => {
        setActiveRoute(history.location.pathname);
    }, [history.location.pathname]);

    return (
        <>
            <Box className="goback_link" onClick={() => window.location.replace("/")}>
                <ArrowBackIcon sx={{ color: "secondary.main" }} />
                <CustomButton
                    btnText={<Typography variant="buttonMedium">MF Dashboard</Typography>}
                    color="secondary"
                    variant="text"
                    size="medium"
                />
            </Box>
            <List className="sidebar_menu">
                {ROLE_ACCESS[index].includes(FEEDBACK) && (
                    <ListItem
                        onClick={() => handleMenuClick("/feedback")}
                        button
                        className={activeRoute === "/feedback" ? "active" : ""}
                    >
                        <ListItemIcon sx={{ paddingLeft: "1rem" }}>
                            <FeedbackIcon
                                sx={{
                                    color: "text.fill"
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                marginTop: "2px",
                                marginBottom: "2px",
                                paddingLeft: "1rem",
                                color: "text.primary"
                            }}
                            primary={
                                <Typography component="span" variant="subtitle2">
                                    Feedbacks
                                </Typography>
                            }
                        />
                    </ListItem>
                )}
                {ROLE_ACCESS[index].includes(MENTORSHIP) && (
                    <ListItem
                        onClick={() => handleMenuClick("/mentorship")}
                        // sx={{ display: haveAccess(access, "Location") ? "flex" : "none" }}
                        sx={{ display: "flex" }}
                        button
                        className={activeRoute === "/mentorship" ? "active" : ""}
                    >
                        <ListItemIcon sx={{ paddingLeft: "1rem" }}>
                            <CastForEducationIcon
                                sx={{
                                    color: "text.fill"
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                marginTop: "2px",
                                marginBottom: "2px",
                                paddingLeft: "1rem",
                                color: "text.primary"
                            }}
                            primary={
                                <Typography component="span" variant="subtitle2">
                                    Mentorship
                                </Typography>
                            }
                        />
                    </ListItem>
                )}
                {ROLE_ACCESS[index].includes(PERFORMANCE_REVIEW) && (
                    <ListItem
                        onClick={() => handleMenuClick("/performance-review")}
                        button
                        className={activeRoute === "/performance-review" ? "active" : ""}
                    >
                        <ListItemIcon sx={{ paddingLeft: "1rem" }}>
                            <RateReviewIcon
                                sx={{
                                    color: "text.fill"
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                marginTop: "2px",
                                marginBottom: "2px",
                                paddingLeft: "1rem",
                                color: "text.primary"
                            }}
                            primary={
                                <Typography component="span" variant="subtitle2">
                                    Opportunity
                                </Typography>
                            }
                        />
                    </ListItem>
                )}
            </List>
        </>
    );
};

export default MainItem;
