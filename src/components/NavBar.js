import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Logout from './Logout';

const NavBar = ({ currentUser }) => {
	return (
		<div className="nav">
			{currentUser ? <strong> Welcome {currentUser.data.attributes.username} </strong> : ''}
			<br /> <br />
			{currentUser ? <Logout /> : <Login />}
		</div>
	);
};

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps)(NavBar);
