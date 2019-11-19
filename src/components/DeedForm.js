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
	debugger;

	state = {
		title: '',
		giver_id: '',
		receiver_id: '',
		content: '',
		image_url: ''
	};

	handleOnChange = (event) => {
		// Handle Updating Component State
		// debugger;
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
	render() {
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
							</Col>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
						<Form.Group as={Row}>
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
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>

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
