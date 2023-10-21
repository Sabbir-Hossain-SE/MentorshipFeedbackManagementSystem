/* eslint-disable prettier/prettier */
import React from "react";
import { Route } from "react-router-dom";
import { CustomRouterProps } from "../@types/layouts/CustomRouterProps";
import AccessProvider from "./AccessProvider";
import AuthProvider from "./AuthProvider";
import MainPageWrapper from "./MainPageWrapper";

const UserLayout: React.FunctionComponent<CustomRouterProps> = (props) => {
    const { component: Component, featureName, pageTitle, sideBarMode, ...rest } = props;
    const ComponentToRender = Component as React.ElementType;

    return (
        <AuthProvider>
            <AccessProvider featureName={featureName}>
                <Route
                    {...rest}
                    render={(props) => (
                        <MainPageWrapper pageTitle={pageTitle || "FM"} sideBarMode={sideBarMode}>
                            <ComponentToRender {...props} />
                        </MainPageWrapper>
                    )}
                />
            </AccessProvider>
        </AuthProvider>
    );
};

export default UserLayout;
