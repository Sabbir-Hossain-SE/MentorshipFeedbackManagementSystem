import React from "react";
import { Route } from "react-router-dom";
import { CustomRouterPropsPublic } from "../@types/layouts/CustomRouterProps";
import PublicPageWrapper from "./PublicPageWrapper";

const PublicLayout: React.FunctionComponent<CustomRouterPropsPublic> = (
    { component: Component, pageTitle, error = false, ...rest },
    props
) => {
    const ComponentToRender = Component as React.ElementType;
    if (error) {
        return <Route {...rest} render={() => <ComponentToRender {...props} />} />;
    }

    return (
        <Route
            {...rest}
            render={() => (
                <PublicPageWrapper>
                    <ComponentToRender {...props} />
                </PublicPageWrapper>
            )}
        />
    );
};

export default PublicLayout;
