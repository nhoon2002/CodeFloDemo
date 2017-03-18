import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import users from "./userReducer";
import sesh from "./sessReducer";


export default const rootReducer = combineReducers({
	users,
	// sesh,
	routing: routerReducer
});