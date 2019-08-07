import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import './App.css';
import Login from './components/Login';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			// <div className="App">
			// 	<div className="App-header">
			//<h2>I'm the App Component</h2>
			<Login />
			// 	</div>
			// 	<p className="App-intro">
			// 		To get started, edit <code>src/App.js</code> and save to reload.
			// 	</p>
			// </div>
		);
	}
}

export default connect(null, { getCurrentUser })(App);
