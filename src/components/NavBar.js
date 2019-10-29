import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
import Logout from './Logout';
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
					<strong> Welcome {currentUser.data.attributes.username} </strong>
				) : (
					<Nav.Link href="/"> Appy</Nav.Link>
				)}
			</Navbar.Brand>
			{!currentUser ? (
				<div className={'currentUserIsTrue'}>
					<Nav className="mr-auto">
						{/* <Nav.Link href="/login">Login</Nav.Link> */}
						<Nav.Link>
							<Link to="/login">Log In</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/signup">Signup </Link>
						</Nav.Link>
						{/* <Nav.Link href="/login">Login</Nav.Link> */}
					</Nav>
				</div>
			) : (
				<Nav>
					{' '}
					<Nav.Link>
						<Logout />
					</Nav.Link>
				</Nav>
			)}

			{/* <Nav>
				{currentUser ? (
					<Nav.Link>
						<Logout />
					
					</Nav.Link>
				) : null}
			</Nav> */}
			{/* <Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form> */}
		</Navbar>
	);
};

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps)(NavBar);
