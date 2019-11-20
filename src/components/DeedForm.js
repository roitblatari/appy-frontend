import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

import { createDeed } from '../actions/createDeed';

class DeedForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			giver_id: '',
			receiver_id: '',
			receiver_emails: [],
			content: '',
			image_url: ''
		};
	}
	// state = {
	// 	title: '',
	// 	giver_id: '',
	// 	receiver_id: '',
	// 	receiver_emails: [],
	// 	content: '',
	// 	image_url: ''
	// };

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		// updateSignupForm(this.state);	//
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		console.log('in handle submit', this.props);
		// redux action and reducer and history
		this.props.createDeed(this.state);
		this.setState({
			title: '',
			giver_id: '',
			receiver_id: '',
			content: '',
			image_url: ''
		});
	};
	componentDidMount() {
		// debugger;

		fetch('http://localhost:3000/api/v1/users/', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.json())
			.then((users) => {
				let emails = [];
				// debugger;
				emails = users.data.map((user) => user.attributes.email);
				console.log(emails);
				debugger;
				this.setState({
					...this.state,
					receiver_emails: emails
				});
			});
	}

	render() {
		debugger;
		return (
			<Jumbotron fluid>
				<Container>
					<Form onSubmit={() => this.handleSubmit(event)} style={{ width: '30rem' }}>
						<Form.Group as={Row}>
							{/* <Row className="justify-content-md-center"> */}
							<Form.Label column sm="2">
								Title
							</Form.Label>
							<Col sm="10">
								<Form.Control
									type="text"
									name="title"
									onChange={this.handleOnChange}
									value={this.state.title}
									placeholder="Enter title"
								/>
							</Col>
							{/* </Row> */}
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="2">
								Givers id
							</Form.Label>
							<Col sm="10">
								<Form.Control
									type="text"
									placeholder="giver_id"
									value={this.state.giver_id}
									name="giver_id"
									onChange={this.handleOnChange}
								/>
								<text className="justify-content-md-center">
									this should be a select option that You can select to user by name :-)
								</text>
							</Col>

							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>

						<Form.Group as={Row}>
							<Form.Label column sm="2">
								Givers id
							</Form.Label>
							<Col sm="10">
								{/* <Form.Control
									type="select"
									placeholder="giver_id"
									value={this.state.giver_id}
									name="giver_id"
									onChange={this.handleOnChange}
								/> */}
								{this.state.receiver_emails}
								<select value={this.state.value} onChange={this.handleChange}>
									<option value="grapefruit">Grapefruit</option>
									<option value="lime">Lime</option>
									<option value="coconut">Coconut</option>
									<option value="mango">Mango</option>
								</select>
								<text className="justify-content-md-center">
									this should be a select option that You can select to user by name :-)
								</text>
							</Col>

							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
						{/* <Form.Group as={Row}>
							<Form.Label column sm="2">
								Receivers id
							</Form.Label>
							<Col sm="10">
								<Form.Control
									type="text"
									placeholder="receiver_id"
									value={this.state.receiver_id}
									name="receiver_id"
									onChange={this.handleOnChange}
								/>
							</Col>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> 
						</Form.Group> */}

						<Form.Group as={Row}>
							<Form.Label column sm="2">
								Image URL
							</Form.Label>
							<Col sm="10">
								<Form.Control
									type="text"
									placeholder="image_url"
									value={this.state.image_url}
									name="image_url"
									onChange={this.handleOnChange}
								/>
							</Col>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="2">
								Content
							</Form.Label>{' '}
							<Col sm="10">
								<Form.Control
									type="text"
									as="textarea"
									placeholder="content"
									value={this.state.content}
									name="content"
									onChange={this.handleOnChange}
								/>
							</Col>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>

						<Button type="submit" value="Create Deed" variant="primary">
							Create Deed
						</Button>
					</Form>
				</Container>
			</Jumbotron>
		);
	}
}
// const mdtp = () => {
// 	console.log(createDeed);

// 	return {
// 		createDeed
// 	};
// };
export default connect(null, { createDeed })(DeedForm);
