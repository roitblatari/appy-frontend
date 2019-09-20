import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signup';
import { signup } from '../actions/currentUser';

class Signup extends Component {
	state = {
		username: '',
		email: '',
		image_url: '',
		password: ''
	};

	handleOnChange = (event) => {
		// Handle Updating Component State
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		// updateSignupForm(this.state);
		//
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);

		// redux action and reducer and history
		this.props.signup(this.state);
		this.setState({
			username: '',
			email: '',
			image_url: '',
			password: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={() => this.handleSubmit(event)}>
					<input
						type="text"
						placeholder="username"
						value={this.state.username}
						name="username"
						onChange={this.handleOnChange}
					/>
					<input
						type="text"
						placeholder="email"
						value={this.state.email}
						name="email"
						onChange={this.handleOnChange}
					/>
					<input
						type="text"
						placeholder="image_url"
						value={this.state.image_url}
						name="image_url"
						onChange={this.handleOnChange}
					/>
					<input
						type="password"
						placeholder="password"
						value={this.state.password}
						name="password"
						onChange={this.handleOnChange}
					/>
					<input type="submit" value="Sign Up" />
				</form>
			</div>
		);
	}
}

export default connect(null, { signup })(Signup);
