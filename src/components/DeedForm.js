import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createDeed } from '../actions/createDeed';

class DeedForm extends Component {
	state = {
		title: '',
		giver_id: '',
		receiver_id: '',
		content: '',
		image_url: ''
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
			<div>
				<form onSubmit={() => this.handleSubmit(event)}>
					<input
						type="text"
						placeholder="title"
						value={this.state.title}
						name="title"
						onChange={this.handleOnChange}
					/>
					<input
						type="text"
						placeholder="giver_id"
						value={this.state.giver_id}
						name="giver_id"
						onChange={this.handleOnChange}
					/>
					<input
						type="text"
						placeholder="receiver_id"
						value={this.state.receiver_id}
						name="receiver_id"
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
						type="content"
						placeholder="content"
						value={this.state.content}
						name="content"
						onChange={this.handleOnChange}
					/>
					<input type="submit" value="Create Deed" />
				</form>
			</div>
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
