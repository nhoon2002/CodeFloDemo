import { applyMiddleware, createStore, compose } from "Redux";

//Connect react router with redux
import { syncHistoryWithStore } from "react-router-redux";

import { browserHistory } from "react-router";

import logger from "redux-logger";
import thunk from "redux-thunk";


import promise from "redux-promise-middleware";

import reducer from './reducers/index.js';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);