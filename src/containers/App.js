// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as actionsCreators from '../actions/userAction';
import Main from './Main.jsx';
import { createUser } from '../actions/userAction'
/*******************/
// Connects a React component to a Redux store. connect is a facade around connectAdvanced, providing a 
// convenient API for the most common use cases.

// It does not modify the component class passed to it; instead, it returns a new, connected component class
// for you to use.
function mapStateToProps (state) {
	return state;
}

function mapDispatchToProps (dispatch) {
	// return bindActionCreators(actionsCreators, dispatch);

	return {
	    handleForm: (formData) => {
	      dispatch(createUser(formData))
	    }
	}

}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;