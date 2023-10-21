import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup
} from "@mui/material";
import { useState } from "react";

const FeedbackForm = () => {
    const [dayReview, setDayReview] = useState("very good");

    const handleDayReviewChange = (event: any) => {
        setDayReview(event.target.value);
    };

    return (
        <Box sx={{ marginTop: "12px" }}>
            <form>
                <FormControl sx={{ width: "100%" }}>
                    <Grid container spacing={1.5} sx={{ display: "flex" }}>
                        <Grid item xs={8}>
                            <FormLabel component="legend">
                                How was your day? Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Porro iste fugiat nam possimus pariatur enim
                                corrupti eum iure asperiores quo odit eius tenetur accusantium,
                                maxime sit dolores? Accusamus earum omnis, praesentium magnam
                                eveniet libero in pariatur error rerum atque similique!
                            </FormLabel>
                        </Grid>
                        <Grid item xs={4}>
                            {" "}
                            <RadioGroup
                                aria-label="dayReview"
                                name="dayReview"
                                value={dayReview}
                                onChange={handleDayReviewChange}
                                sx={{ display: "inlineFlex" }}
                            >
                                <FormControlLabel
                                    value="very good"
                                    control={<Radio />}
                                    label="Very Good"
                                />
                                <FormControlLabel value="good" control={<Radio />} label="Good" />
                                <FormControlLabel value="bad" control={<Radio />} label="Bad" />
                                <FormControlLabel
                                    value="very bad"
                                    control={<Radio />}
                                    label="Very Bad"
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </Box>
    );
};

export default FeedbackForm;
