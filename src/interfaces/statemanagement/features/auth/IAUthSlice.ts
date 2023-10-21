import { IUser } from "interfaces/components/IUser";

export interface IAuth {
    user: IUser;
    isAuthenticated: boolean;
}

export interface IAuthState {
    auth: IAuth;
}
