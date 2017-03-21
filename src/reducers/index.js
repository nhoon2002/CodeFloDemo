import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { registerReducer/*, allData*/ } from "./sessReducer";

const rootReducer = combineReducers({
	registerReducer,
	// allData,
	routing: routerReducer
});
export default rootReducer;