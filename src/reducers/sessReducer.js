//Make a reducer file for each state in the store (which is like the main database for redux)
//Every reducer runs every time there is an action, whether something actually changes in state is up to
//programmer.
export default function reducer(state={
		isLoggedIn: "",
		sessionUserID: "",
		user: "",
		error: ""
	}, action ) {

	switch (action.type) {
		case "SET_REGIST_SESS": {
			// req.session.isLogged = true;
			// req.session.user_id = action.payload.id;
			return { 
				...state, 
				isLoggedIn: true,
				sessionUserID: //set the data set to req session here,
				user: action.payload
			}
		}
		case "ERROR_MSGS": {
			return { 
				...state,
				error: action.payload 
			}
		}
		// case "GET_USER": {
		// 	return { ...state, user: }
		// }
		// case "GET_USER_ERROR": {
		// 	return {...state, error: payload.err }
		// }
	}

	return state;
}