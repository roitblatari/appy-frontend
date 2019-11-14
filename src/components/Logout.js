import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
	const handleClick = (event) => {
		event.preventDefault();
		logout();
	};

	return (
		<div>
			<Button onClick={handleClick} type="submit" value="Log Out">
				Log Out
			</Button>
			{/* <form onSubmit={handleSubmit}>
				<input type="submit" value="Log Out" />
			</form> */}
		</div>
	);
};

export default connect(null, { logout })(Logout);
