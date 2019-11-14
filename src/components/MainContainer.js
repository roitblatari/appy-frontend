import React from 'react';
import DeedsContainer from './DeedsContainer';

import Jumbotron from 'react-bootstrap/Jumbotron';
// import SidePanel from 'react-bootstrap/SidePanel';

import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
// import DeedForm from './DeedForm';

const MainContainer = ({ currentUser }) => {
	return (
		// <div className="mainContainer">
		<div className="mainContainer">
			{/* <Jumbotron>{currentUser.username}</Jumbotron> */}
			{/* {currentUser ? <MyDeeds /> : null
			// Did you know that I am the <strong>MainContainer</strong> component?
			}DeedsContainer
			{currentUser ? <DeedForm /> : null
			// Did you know that I am the <strong>MainContainer</strong> component?
			} */}
			{currentUser ? (
				<Jumbotron fluid>
					{/* <SidePanel> */}
					{/* <ListGroup className="flex-column" md={{ span: 4, offset: 4 }}> */}

					{/* </SidePanel> */}
					<Container>
						<DeedsContainer />
					</Container>
				</Jumbotron>
			) : null}
		</div>
	);
};

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	};
};

export default connect(mapStateToProps)(MainContainer);
