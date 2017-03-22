import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { registerReducer } from "./registerReducer";
import { sessionReducer } from "./sessReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
	registerReducer,
	sessionReducer,
	modalReducer,
	routing: routerReducer
});
export default rootReducer;
