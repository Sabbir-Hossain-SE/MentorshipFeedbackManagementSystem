import { useHistory } from "react-router-dom";
import {
    FEEDBACK_COLLECTION,
    MENTORSHIP_REQUEST,
    PERFORMANCE_REVIEW,
    PROVIDE_MENTORSHIP,
    SCHEDULE_SESSION
} from "utils/Constant/GlobalConstant";

const useFeatureCard = () => {
    const history = useHistory();

    const handleFeature = (name: string) => {
        if (name === FEEDBACK_COLLECTION) {
            history.push("/feedback-collection");
        } else if (name === MENTORSHIP_REQUEST) {
            history.push("");
        } else if (name === SCHEDULE_SESSION) {
            history.push("/schedule-session");
        } else if (name === PERFORMANCE_REVIEW) {
            history.push("/performance-review");
        } else if (name === PROVIDE_MENTORSHIP) {
            history.push("");
        } else {
            history.push("/performance-review");
        }
    };
    return { handleFeature };
};

export default useFeatureCard;
