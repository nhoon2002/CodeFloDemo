import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';
import App from './containers/App.jsx';
// import Main from './containers/Main.jsx';
import Home from './containers/Home.jsx';
import Profile from './containers/Profile.jsx';
import TodoForm from './containers/TodoForm.jsx';
import Register from './containers/Register.jsx';
import NewProject from './containers/NewProject.jsx';


// @connect((store) => {
// 	sessions:
// })
const theRoutes = (
   	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App}>
		      <IndexRoute component={Home}/>
		      <Route path="/profile" component= {Profile} />
		      <Route path="/todoform" component= {TodoForm} />
		      <Route path="/register" component= {Register} />
		      <Route path="/newProject" component= {NewProject} />
		    </Route>
		</Router>
	</Provider>
  );

export default theRoutes;
