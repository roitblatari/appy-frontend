import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import usersReducer from './reducers/users';
// import users from './reducers/users';
// import { Provider ,  connect } from 'react-redux';

const reducer = combineReducers({
	user: usersReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
