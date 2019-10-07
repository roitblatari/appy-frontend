import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
			<Router>
				<div className="App">
					<NavBar />

					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					{/* <Route exact path="/logout" component={Logout} /> */}
					<MainContainer />
				</div>
			</Router>
		);
	}
}

// mapStateToProps should check if logged-in not current-user
const mapStateToProps = ({ getCurrentUser }) => {
	return {
		getCurrentUser
	};
};

export default connect(mapStateToProps, { getCurrentUser })(App);
