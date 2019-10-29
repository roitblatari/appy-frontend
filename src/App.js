import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { getCurrentUser } from './actions/currentUser';
import Login from './components/LoginForm';
import Signup from './components/Signup';
// import Logout from './components/Logout';
// import currentUser from './actions/currentUser';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</Switch>
				{/* <Route exact path="/logout" component={Logout} /> */}
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
