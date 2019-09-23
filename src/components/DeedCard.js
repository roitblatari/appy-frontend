import React from 'react';

const DeedCard = (props) => {
	console.log(props.deed.attributes.title);
	const title = props.deed.attributes.title;
	const content = props.deed.attributes.content;

	return (
		<div class="ui  cards">
			<div class="card  placeholder segment">
				<p>
					<strong>DeedCard</strong>{' '}
				</p>
				<div class="header">{title}</div>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default DeedCard;
