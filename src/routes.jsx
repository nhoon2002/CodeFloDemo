import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.js';
import Home from './containers/Home.jsx';
import Profile from './containers/Profile.jsx';
import TodoForm from './containers/TodoForm.jsx';
import Register from './containers/Register.jsx';
import { history } from './store';
// import { connect } from 'react-redux';

// @connect((store) => {
// 	sessions: 
// })
export default () => {
   (
  	<Router history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Home}/>
	      <Route path="/profile" component= {Profile} />
	      <Route path="/todoform" component= {TodoForm} />
	      <Route path="/register" component= {Register} />
	    </Route>
	</Router>
  );
};
