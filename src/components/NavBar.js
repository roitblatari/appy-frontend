import React from 'react';
// import { Link } from 'react-router-dom'; d d

import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logout from './Logout';

const NavBar = ({ currentUser, history }) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				<Nav.Link href="/"> Appy</Nav.Link>
			</Navbar.Brand>
			{currentUser ? (
				<React.Fragment>
					<Nav style={{ color: 'white' }}>Welcome {currentUser.data.attributes.username}</Nav>

					<Nav.Link href="/deedForm" userId={currentUser.data.attributes.id}>
						Create Deed
					</Nav.Link>
				</React.Fragment>
			) : null}
			{!currentUser ? (
				<div className={'currentUserIsTrue ml-auto'}>
					<Nav className="float-xl-right">
						<Nav.Link href="/login">Log In</Nav.Link>
						<Nav.Link href="/signup">Signup </Nav.Link>
					</Nav>
				</div>
			) : (
				<Nav className="ml-auto">
					<Nav.Link>
						<Logout history={history} />
					</Nav.Link>
				</Nav>
			)}
		</Navbar>
	);
};

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps)(NavBar);
