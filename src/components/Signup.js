import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateSignupForm } from '../actions/signup';
import { signup } from '../actions/currentUser';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
		this.props.signup(this.state, history);
		this.setState({
			username: '',
			email: '',
			image_url: '',
			password: ''
		});
	};

	render() {
		console.log(this.props);

		return (
			<Jumbotron fluid>
				<Container>
					<Form onSubmit={() => this.handleSubmit(event)}>
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								username
							</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									placeholder="username"
									value={this.state.username}
									name="username"
									onChange={this.handleOnChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Email
							</Form.Label>

							<Col sm="9">
								<Form.Control
									type="text"
									placeholder="email"
									value={this.state.email}
									name="email"
									onChange={this.handleOnChange}
								/>
							</Col>
						</Form.Group>
						{/* 
						For now I feel that pictures are unsafe, considering this application is geared for kids
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								image_url
							</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									placeholder="image_url"
									value={this.state.image_url}
									name="image_url"
									onChange={this.handleOnChange}
								/>
							</Col>
						</Form.Group> */}
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								password
							</Form.Label>

							<Col sm="9">
								<Form.Control
									type="password"
									placeholder="password"
									value={this.state.password}
									name="password"
									onChange={this.handleOnChange}
								/>
							</Col>
						</Form.Group>
						<Button type="submit" value="Submit" variant="primary">
							Submit
						</Button>
					</Form>
				</Container>
			</Jumbotron>
		);
	}
}

export default connect(null, { signup })(Signup);
