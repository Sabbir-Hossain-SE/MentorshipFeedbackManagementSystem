import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/components/IUser";
import { IAuth, IAuthState } from "interfaces/statemanagement/features/auth/IAUthSlice";

const initialState = {
    user: {},
    isAuthenticated: false
} as IAuth;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserCredentials: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        }
    }
});

export const { setUserCredentials } = authSlice.actions;

export default authSlice.reducer;

export const getUser = (state: IAuthState) => state.auth.user;
export const checkIsAuthenticated = (state: IAuthState) => state.auth.isAuthenticated;
