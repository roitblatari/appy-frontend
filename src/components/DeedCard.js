import React from 'react';

const DeedCard = (props) => {
	console.log(props.deed.attributes.title);
	const title = props.deed.attributes.title;
	const content = props.deed.attributes.content;

	return (
		<div>
			<p>===========================================================================</p>
			<p>
				this is all the deeds but I probably want just my deeds from <strong>DeedCard</strong>{' '}
			</p>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default DeedCard;
