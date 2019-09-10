import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps, { getCurrentUser })(App);
