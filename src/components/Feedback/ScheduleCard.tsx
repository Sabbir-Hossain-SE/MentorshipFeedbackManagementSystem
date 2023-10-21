import {
    Avatar,
    Badge,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    styled
} from "@mui/material";
import { useState } from "react";

const ScheduleCard = () => {
    const [isHover, setIsHover] = useState(false);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""'
            }
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0
            }
        }
    }));
    return (
        <Card variant="outlined" sx={{ maxWidth: 200, height: 192, borderRadius: "6px" }}>
            <CardActionArea
                disableRipple={isHover}
                sx={{ width: "100%", height: "100%", position: "relative" }}
            >
                {/* <IconButton
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                    sx={{ zIndex: 999, position: "absolute", right: 0 }}
                    aria-label="settings"
                >
                    <MoreVertIcon />
                </IconButton> */}
                <CardContent
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        bgcolor: "background.paper"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                            sx={{
                                position: "absolute",
                                width: "84px",
                                height: "84px",
                                top: 10
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: "84px",
                                    height: "84px",
                                    bgcolor: "error.main"
                                }}
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </StyledBadge>
                        <Typography
                            color="action.hover"
                            variant="h1"
                            sx={{ fontSize: "130px !important" }}
                        >
                            24
                        </Typography>
                    </Box>

                    <Box sx={{ bottom: 12, width: "100%" }}>
                        <Typography
                            color="primary.dark"
                            gutterBottom
                            variant="h5"
                            align="center"
                            sx={{ mb: 0 }}
                        >
                            Junior Engineer
                        </Typography>
                        <Typography color="primary.main" align="center" variant="subtitle2">
                            24 May , 2023
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ScheduleCard;
