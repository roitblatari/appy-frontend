import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Select from 'react-select';

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
			giver_users: [],
			content: '',
			image_url: ''
		};
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		// if (name == 'giver_id') {
		// 	this.setState({
		// 		[name]: event.target.selectedOptions[0].id
		// 	});
		// } else {
		this.setState({
			[name]: value
		});
		// }
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		console.log('in handle submit', this.props);

		this.props.createDeed(this.state);
		this.setState({
			title: '',
			giver_id: '',
			receiver_id: '',
			// giver_users: [],
			content: '',
			image_url: ''
		});
	};
	componentDidMount() {
		fetch('http://localhost:3000/api/v1/users/', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.json())
			.then((users) => {
				let giverUsers = users;

				giverUsers = users.data.map((user) => user.attributes);
				console.log(giverUsers);
				// debugger;
				this.setState({
					// ...this.state,
					giver_users: giverUsers,
					giver_id: giverUsers[0].id
				});
			});
	}

	selectUssers = () => {
		return this.state.giver_users.map((user) => {
			return <option value={user.id}>{user.email}</option>;
		});
	};

	render() {
		console.log(this.state);
		// const giverUsers = this.state.giver_users;

		return (
			<Jumbotron fluid>
				<Container>
					<Form onSubmit={() => this.handleSubmit(event)}>
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Title
							</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									name="title"
									onChange={this.handleOnChange}
									value={this.state.title}
									placeholder="Enter title"
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Givers Email
							</Form.Label>
							<Col sm="9">
								<Form.Group>
									<Form.Control name="giver_id" onChange={this.handleOnChange} as="select">
										{this.selectUssers()}
									</Form.Control>
								</Form.Group>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Image URL
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
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Content
							</Form.Label>{' '}
							<Col sm="9">
								<Form.Control
									type="text"
									as="textarea"
									placeholder="content"
									value={this.state.content}
									name="content"
									onChange={this.handleOnChange}
								/>
							</Col>
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

export default connect(null, { createDeed })(DeedForm);
