import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer,
    auth: authReducer,
})
export default rootReducer;