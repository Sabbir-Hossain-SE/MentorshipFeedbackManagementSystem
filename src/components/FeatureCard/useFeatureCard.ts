import { useHistory } from "react-router-dom";
import { FEEDBACK, MENTORSHIP, PERFORMANCE_REVIEW } from "utils/Constant/GlobalConstant";

const useFeatureCard = () => {
    const history = useHistory();

    const handleFeature = (name: string) => {
        if (name === FEEDBACK) {
            history.push("/feedback");
        } else if (name === PERFORMANCE_REVIEW) {
            history.push("/performance-review");
        } else if (name === MENTORSHIP) {
            history.push("/mentorship");
        }
    };
    return { handleFeature };
};

export default useFeatureCard;
