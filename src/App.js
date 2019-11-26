import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { getCurrentUser } from './actions/currentUser';
import Login from './components/LoginForm';
import Signup from './components/Signup';
import DeedForm from './components/DeedForm';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			<div className="App">
				<Route path="/" component={NavBar} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/deedForm" component={DeedForm} />

				<MainContainer />
			</div>
		);
	}
}

// mapStateToProps should check if logged-in not current-user
const mapStateToProps = ({ getCurrentUser }) => {
	return {
		getCurrentUser
	};
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
