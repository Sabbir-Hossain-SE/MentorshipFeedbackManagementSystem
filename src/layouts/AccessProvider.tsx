import Forbidden from "components/Global/PageNotFound/Forbidden";
import { AccessProviderProps } from "interfaces/layouts/IAccessProvider";
import { useSelector } from "react-redux";
import { getUser } from "statemanagement/features/auth/authSlice";
import { ROLE_ACCESS, RoleNameType } from "utils/Constant/GlobalConstant";

const AccessProvider: React.FC<AccessProviderProps> = ({ children, featureName }) => {
    const user = useSelector(getUser);
    const index = user.designation as RoleNameType;

    return ROLE_ACCESS[index].includes(featureName) || featureName === "default" ? (
        <div>{children}</div>
    ) : (
        <Forbidden />
    );
};

export default AccessProvider;
