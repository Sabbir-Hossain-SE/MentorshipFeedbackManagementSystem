import { SelectChangeEvent } from "@mui/material";
import { IUser } from "interfaces/components/IUser";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserCredentials } from "statemanagement/features/auth/authSlice";
import { engineers } from "utils/demo";

const useAuthentication = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<number>(0);

    const handleAuthentication = () => {
        const loggedInEngineer: IUser[] = engineers.filter(
            (engineer) => engineer.id === selectedUser
        );
        if (loggedInEngineer[0]?.id) {
            // set into store
            dispatch(setUserCredentials(loggedInEngineer[0]));
            history.push("/dashboard");
        }
    };

    const handleUserSelection = (e: SelectChangeEvent<unknown>) => {
        setSelectedUser(e.target.value as number);
    };
    return {
        handleUserSelection,
        selectedUser,
        handleAuthentication,
        engineers
    };
};

export default useAuthentication;
