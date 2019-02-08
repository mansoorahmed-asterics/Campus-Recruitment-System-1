import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import StudentsReducer from "../Actions/StudentsReducer";
const rootReducer = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer,
    auth: authReducer,
    student: StudentsReducer, 
})
export default rootReducer;