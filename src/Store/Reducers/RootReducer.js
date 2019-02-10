import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import StudentsReducer from "./StudentsReducer";
import CompanyReducer from "./CompanyReducer";
const rootReducer = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer,
    auth: authReducer,
    student: StudentsReducer, 
    company: CompanyReducer,
})
export default rootReducer;