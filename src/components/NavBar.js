import React from 'react';
import { Link } from 'react-router-dom';

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
					<Nav.Link>
						<Link to="/deedForm" userid={currentUser.data.attributes.id}>
							Create Deed
						</Link>
					</Nav.Link>
				</React.Fragment>
			) : null}
			{!currentUser ? (
				<div className={'currentUserIsTrue ml-auto'}>
					<Nav className="float-xl-right">
						<Nav.Link>
							<Link to="/login">Log In</Link>{' '}
						</Nav.Link>
						<Nav.Link>
							<Link to="/signup">Signup </Link>
						</Nav.Link>
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
