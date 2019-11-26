import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { logout } from '../actions/currentUser';

const Logout = ({ logout, history }) => {
	const handleClick = (event) => {
		event.preventDefault();
		logout(history);
	};

	return (
		<div>
			<Button onClick={handleClick} type="submit" value="Log Out">
				Log Out
			</Button>
		</div>
	);
};

export default connect(null, { logout })(Logout);
