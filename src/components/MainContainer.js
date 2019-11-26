import React from 'react';
import DeedsContainer from './DeedsContainer';
// import ReceiversContainer from './ReceiversContainer';

import Jumbotron from 'react-bootstrap/Jumbotron';
// import SidePanel from 'react-bootstrap/SidePanel';

import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
// import DeedForm from './DeedForm';

const MainContainer = ({ currentUser }) => {
	return (
		<div className="mainContainer">
			{currentUser ? (
				<Jumbotron fluid>
					<Container>
						<DeedsContainer />
					</Container>
					{/* <ReceiversContainer /> */}
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
