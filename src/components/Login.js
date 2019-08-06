import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = ({ loginForm, updateLoginForm }) => {
	const handleOnChange = (event) => {
		// Handle Updating Component State
		const { name, value } = event.target;
		const updatedFormInfo = {
			...loginForm,
			[name]: value
		};
		updateLoginForm(updatedFormInfo);
	};

	return (
		<form onSubmit={undefined}>
			<input
				type="text"
				placeholder="username"
				value={loginForm.username}
				name="username"
				onChange={handleOnChange}
			/>
			<input type="text" placeholder="email" value={loginForm.email} name="email" onChange={handleOnChange} />
			<input
				type="text"
				placeholder="password"
				value={loginForm.password}
				name="password"
				onChange={handleOnChange}
			/>
			<input type="submit" value="Log In" />
		</form>
	);
};

const mapStateToPprops = (state) => {
	return {
		loginForm: state.loginForm
		// username: state.loginForm.username,
		// email: state.loginForm.email,
		// password: state.loginForm.password
	};
};

export default connect(mapStateToPprops, { updateLoginForm })(Login);
