import axios from 'axios';


export function createUser() {
	return function(dispatch) {
		axios.post('/register', formInput).then((data) => {
			console.log("RETURN DATA FROM AXIOS REGISTER POST", data);
			console.log('\n\n');
			console.log("RETURNed DATA ERRORS", data.data[0]);
			console.log('\n\n');
			if(data.data.length > 0){
				dispatch({ type: "ERROR_MSGS", payload: data.data })
			}else{
				dispatch({ type: "SET_REGIST_SESS", payload: data})
			}
		});
	}
}