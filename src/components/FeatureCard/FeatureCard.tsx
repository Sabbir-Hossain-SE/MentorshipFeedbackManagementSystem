import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { IFeatureCard } from "interfaces/components/IFeatureCard";
import scheduleImg from "../../assets/images/Schedule.png";
import useFeatureCard from "./useFeatureCard";

const FeatureCard: React.FC<IFeatureCard> = (props) => {
    const { feature } = props;
    const { handleFeature } = useFeatureCard();

    return (
        <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                        {feature.featureTitle}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {feature.featureSubTitle}
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                    <IconButton
                        onClick={() => handleFeature(feature.name)}
                        color="primary"
                        aria-label="play/pause"
                    >
                        <ArrowRightAltIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={scheduleImg}
                alt="Live from space album cover"
            />
        </Card>
    );
};

export default FeatureCard;
