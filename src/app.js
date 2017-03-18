import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import makeRoutes from './routes.jsx';
import store, { history } from './store';
import { Provider } from 'react-redux';


const appEntry = <Router history={history}>{makeRoutes()}</Router>;
ReactDOM.render(
	<Provider store={store}>
	appEntry
	</Provider>,
	document.getElementById('root')
);
