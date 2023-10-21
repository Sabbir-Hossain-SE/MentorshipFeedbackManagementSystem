import { Route } from "react-router-dom";
import { IErrorLayout } from "../@types/layouts/CustomRouterProps";
import ErrorPageWrapper from "./ErrorPageWrapper";

const ErrorLayout: React.FC<IErrorLayout> = ({ component: Component, pageTitle, ...rest }) => {
    const ComponentToRender = Component as React.ElementType;
    return (
        <Route
            {...rest}
            render={(props) => (
                <ErrorPageWrapper pageTitle={pageTitle}>
                    <ComponentToRender {...props} />
                </ErrorPageWrapper>
            )}
        />
    );
};

export default ErrorLayout;
