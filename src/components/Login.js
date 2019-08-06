import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

const Login = ({ username, email, password }) => {
	const handleOnChange = (event) => {
		// Handle Updating Component State
		const { name, value } = event.target;
		const updatedFormInfo = {
			name,
			value
		};
		updateLoginForm(updatedFormInfo);
	};

	return (
		<form onSubmit={undefined}>
			<input type="text" placeholder="username" value={username} name="username" onChange={handleOnChange} />
			<input type="text" placeholder="email" value={email} name="email" onChange={handleOnChange} />
			<input type="text" placeholder="password" value={password} name="password" onChange={handleOnChange} />
			<input type="submit" value="Log In" />
		</form>
	);
};

const mapStateToPprops = (state) => {
	return {
		username: state.loginForm.username,
		password: state.loginForm.password
	};
};

export default connect(mapStateToPprops, updateLoginForm)(Login);
