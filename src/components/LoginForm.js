import React from 'react';
import { connect } from 'react-redux';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const LoginForm = ({ loginFormData, updateLoginForm, login, history }) => {
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
		login(loginFormData, history);
	};

	return (
		<Jumbotron fluid>
			<Container>
				<Form style={{ width: '30rem' }} onSubmit={handleSubmit}>
					<Form.Group as={Row}>
						<Form.Label column sm="2">
							Username
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="text"
								placeholder="username"
								autoComplete="username"
								value={loginFormData.username}
								name="username"
								onChange={handleOnChange}
							/>
						</Col>
					</Form.Group>
					{/* <label>Email</label><br/><input type="text" placeholder="email" value={loginFormData.email} name="email" onChange={handleOnChange} /> */}
					<Form.Group as={Row}>
						<Form.Label column sm="2">
							Password
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="password"
								placeholder="password"
								value={loginFormData.password}
								name="password"
								autoComplete="current-password"
								onChange={handleOnChange}
							/>
						</Col>
					</Form.Group>

					<Form.Group>
						<Button type="submit" className="ui blue button" value="Log In">
							Log In
						</Button>
					</Form.Group>
				</Form>
			</Container>
		</Jumbotron>
	);
};

const mapStateToPprops = (state) => {
	return {
		loginFormData: state.loginForm
	};
};

export default connect(mapStateToPprops, { updateLoginForm, login })(LoginForm);

//
