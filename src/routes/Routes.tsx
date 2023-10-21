import NotFound from "components/Global/PageNotFound/NotFound";
import ErrorLayout from "layouts/ErrorLayout";
import PublicLayout from "layouts/PublicLayout";
import UserLayout from "layouts/UserLayout";
import Authentication from "pages/Authentication/Authentication";
import Dashboard from "pages/Dashboard/Dashboard";
import Feedback from "pages/Feedback/Feedback";
import Mentorship from "pages/Mentorship/Mentorship";
import PerformanceReview from "pages/PerformanceReview/PerformanceReview";
import { Switch } from "react-router-dom";
import { FEEDBACK, MENTORSHIP, PERFORMANCE_REVIEW } from "utils/Constant/GlobalConstant";

const Routes = () => {
    return (
        <Switch>
            <PublicLayout exact path="/" pageTitle="MF | Home" component={Authentication} />
            <UserLayout
                exact
                path="/dashboard"
                featureName="default"
                sideBarMode="default"
                component={Dashboard}
                pageTitle="MF | Dashboard"
            />
            <UserLayout
                exact
                path="/feedback"
                featureName={FEEDBACK}
                sideBarMode="default"
                component={Feedback}
                pageTitle="FM | Feedback"
            />
            <UserLayout
                exact
                path="/performance-review"
                featureName={PERFORMANCE_REVIEW}
                sideBarMode="default"
                component={PerformanceReview}
                pageTitle="FM | Review"
            />
            <UserLayout
                exact
                path="/mentorship"
                featureName={MENTORSHIP}
                sideBarMode="default"
                component={Mentorship}
                pageTitle="FM | Mentorship"
            />
            <ErrorLayout path="*" exact component={NotFound} pageTitle="404 Not Found" />
        </Switch>
    );
};

export default Routes;
