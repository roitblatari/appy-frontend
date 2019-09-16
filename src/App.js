import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getCurrentUser } from './actions/currentUser';
import './App.css';

import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
// import currentUser from './actions/currentUser';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			<div className="App">
				<NavBar />
				<MainContainer />
			</div>
		);
	}
}

// mapStateToProps should check if logged-in not current-user
const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps, { getCurrentUser })(App);
