import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.js';
import Home from './containers/Home.jsx';
import Profile from './containers/Profile.jsx';
import TodoForm from './containers/TodoForm.jsx';
import Register from './containers/Register.jsx';
// import { connect } from 'react-redux';

// @connect((store) => {
// 	sessions: 
// })
export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/profile" component= {Profile} />
      <Route path="/todoform" component= {TodoForm} />
      <Route path="/register" component= {Register} />
    </Route>
  );
};
