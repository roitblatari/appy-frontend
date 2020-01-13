import React from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { deleteDeed } from '../actions/myDeeds';

const DeedCard = (props) => {

	const title = props.deed.attributes.title;
	const content = props.deed.attributes.content;

	const handleClick = () => {
		props.deleteDeed(props.deed.attributes.id);
	};

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Deed # {props.deed.attributes.id}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
					<Card.Text>{content}</Card.Text>
					<Button onClick={handleClick} variant="primary">
						Delete
					</Button>

				</Card.Body>
			</Card>
		</div>
	);
};

export default connect(null, { deleteDeed })(DeedCard);
