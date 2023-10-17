import { IUser } from "interfaces/components/IUser";
import { useState } from "react";
import { ROLE_ACCESS } from "utils/Constant/GlobalConstant";
import { engineers } from "utils/demo";

const useHome = () => {
    const [loginUser, setLoginUser] = useState<IUser>();
    const [haveAccess, sethaveAccess] = useState(false);

    const checkHaveAccess = (feature: any): boolean => {
        if (loginUser && loginUser?.designation) {
            return ROLE_ACCESS[loginUser.designation as RoleName].includes(feature);
        }

        return false;
    };
    const handleStatusChange = (e: any) => {
        const users: any[] = engineers.filter((engineer) => engineer.id === e?.target?.value);
        if (users && users?.length > 0) {
            setLoginUser(users[0]);
        }
    };
    return { handleStatusChange, engineers, loginUser, checkHaveAccess };
};

export default useHome;
