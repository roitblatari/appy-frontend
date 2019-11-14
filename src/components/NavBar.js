import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
import Logout from './Logout';
// import { ButtonToolbar } from 'react-bootstrap';
// import Signup from './Signup';
// import { logout } from '../actions/currentUser';

const NavBar = ({ currentUser }) => {
	return (
		// <div className="nav">
		// 	<br /> <br />
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				{/* <Nav.Link href="/login">Login</Nav.Link> */}
				{currentUser ? (
					<div>
						{/* <Nav.Link href="/"> */}
						Welcome {currentUser.data.attributes.username}
						<style hidden>.</style>
						{/* </Nav.Link> */}
						<Link to="/deedForm" userId={currentUser.data.attributes.id}>
							{' '}
							Create Deed
						</Link>
						{/* </Nav.Link> */}
					</div>
				) : (
					<Nav.Link href="/"> Appy</Nav.Link>
				)}
			</Navbar.Brand>
			{!currentUser ? (
				<div className={'currentUserIsTrue'}>
					<Nav className="mr-auto">
						<Nav.Link>
							<Link to="/login">Log In</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/signup">Signup </Link>
						</Nav.Link>
					</Nav>
				</div>
			) : (
				<Nav>
					{/* <Nav.Link>
						<Link to="/deedForm">DeedForm</Link>
					</Nav.Link> */}
					<Nav.Link>
						<Logout />
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
