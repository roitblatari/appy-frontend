import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import currentUser from './actions/currentUser';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			<div className="App">
				{this.props.currentUser ? <Logout /> : <Login />}
				{/* <Login />
				<Logout /> */}
			</div>
			// 	<p className="App-intro">
			// 		To get started, edit <code>src/App.js</code> and save to reload.
			// 	</p>
			// </div>
		);
	}
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps, { getCurrentUser })(App);
