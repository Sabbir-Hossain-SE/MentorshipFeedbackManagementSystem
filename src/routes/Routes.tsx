/* eslint-disable react/destructuring-assignment */
import FeedbackCollection from "pages/FeedbackCollection/FeedbackCollection";
import Home from "pages/Home/Home";
import PerformanceReview from "pages/PerformanceReview/PerformanceReview";
import ScheduleSession from "pages/ScheduleSession/ScheduleSession";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/schedule-session" component={ScheduleSession} />
            <Route exact path="/feedback-collection" component={FeedbackCollection} />
            <Route exact path="/performance-review" component={PerformanceReview} />
        </Switch>
    );
};

export default Routes;
