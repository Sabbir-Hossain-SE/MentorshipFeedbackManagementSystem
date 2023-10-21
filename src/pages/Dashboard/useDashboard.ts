import { useSelector } from "react-redux";
import { getUser } from "statemanagement/features/auth/authSlice";
import { ROLE_ACCESS, RoleNameType } from "utils/Constant/GlobalConstant";

const useDashboard = () => {
    const user = useSelector(getUser);
    const checkHaveAccess = (feature: string): boolean => {
        if (user && user?.designation) {
            const index = user.designation as RoleNameType;

            console.log(index, ROLE_ACCESS[index].includes(feature), feature, ROLE_ACCESS[index]);

            return ROLE_ACCESS[index].includes(feature);
        }
        return false;
    };

    return { checkHaveAccess };
};

export default useDashboard;
