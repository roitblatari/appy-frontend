import React , { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { deleteDeed } from '../actions/myDeeds';

class DeedCard extends Component {
	state = {
		like: false
	}



 handleLikeClick = ()=> {
	 if (this.state.like) {
		 this.setState({like: false})
	 } else {
		 this.setState({like: true})
	 }
	
}

 handleClick = () => {
		this.props.deleteDeed(this.props.deed.attributes.id);
	};

	render() {
		const title = this.props.deed.attributes.title;
		const content = this.props.deed.attributes.content;
		const like = this.state.like
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
		<div >{this.state.like ?"Liked" : " "} </div>
						<Card.Title>Deed # {this.props.deed.attributes.id}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
						<Card.Text>{content}</Card.Text>
		    <Button  onClick={this.handleLikeClick} variant="primary">
							{!this.state.like ? "Like" : "Unlike"}
						</Button>
	
						<Button onClick={this.handleClick} variant="primary">
							Delete
						</Button>
	
					</Card.Body>
				</Card>
			</div>
		);
	
	}
};

export default connect(null, { deleteDeed })(DeedCard);
