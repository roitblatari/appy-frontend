import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { getCurrentUser } from './actions/currentUser';
// import currentUser from './actions/currentUser';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			// <Router>	{/* //</Router> */}
			<div className="App">
				<NavBar />
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

export default connect(mapStateToProps, { getCurrentUser })(App);
