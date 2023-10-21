import { combineReducers } from "redux";
import AuthReducer from "./features/auth/authSlice";

export default combineReducers({
    auth: AuthReducer
});
