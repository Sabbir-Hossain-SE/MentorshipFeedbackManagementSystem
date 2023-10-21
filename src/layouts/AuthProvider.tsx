import { Box } from "@mui/material";
import { AuthProviderProps } from "interfaces/layouts/IAuthProvider";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "statemanagement/features/auth/authSlice";

// AuthProvider Check Authentication if not Redirect to login page
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const user = useSelector(getUser);
    const history = useHistory();
    let content: ReactNode;

    if (user?.id) {
        content = children;
    } else {
        content = null;
        history.replace("/");
    }

    return <Box>{content}</Box>;
};

export default AuthProvider;
