import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = ({ loginFormData, updateLoginForm, login }) => {
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
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="username"
				value={loginFormData.username}
				name="username"
				onChange={handleOnChange}
			/>
			{/* <input type="text" placeholder="email" value={loginFormData.email} name="email" onChange={handleOnChange} /> */}
			<input
				type="password"
				placeholder="password"
				value={loginFormData.password}
				name="password"
				onChange={handleOnChange}
			/>
			<input type="submit" value="Log In" />
		</form>
	);
};

const mapStateToPprops = (state) => {
	return {
		loginFormData: state.loginForm
	};
};

export default connect(mapStateToPprops, { updateLoginForm, login })(Login);
