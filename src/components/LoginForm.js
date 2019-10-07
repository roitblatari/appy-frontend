import React from 'react';
import { connect } from 'react-redux';
// import { Form } from 'react-bootstrap';

import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const LoginForm = ({ loginFormData, updateLoginForm, login }) => {
	const handleOnChange = (event) => {
		// Handle Updating Component State
		const { name, value } = event.target;
		const updatedFormInfo = {
			...loginFormData,
			[name]: value
		};
		updateLoginForm(updatedFormInfo);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(loginFormData);
	};

	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<label>Username</label>

			<input
				type="text"
				placeholder="username"
				value={loginFormData.username}
				name="username"
				onChange={handleOnChange}
			/>
			{/* <label>Email</label><br/><input type="text" placeholder="email" value={loginFormData.email} name="email" onChange={handleOnChange} /> */}
			<label>Password</label>

			<input
				type="password"
				placeholder="password"
				value={loginFormData.password}
				name="password"
				onChange={handleOnChange}
			/>
			<input className="ui blue button" type="submit" value="Log In" />
		</form>
	);
};

const mapStateToPprops = (state) => {
	return {
		loginFormData: state.loginForm
	};
};

export default connect(mapStateToPprops, { updateLoginForm, login })(LoginForm);

//
