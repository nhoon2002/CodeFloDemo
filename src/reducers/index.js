import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import sesh from "./sessReducer";

const rootReducer = combineReducers({
	sesh,
	routing: routerReducer
});
export default rootReducer;