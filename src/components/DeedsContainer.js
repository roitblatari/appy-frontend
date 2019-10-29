import React from 'react';
// import { connect } from 'react-redux';

import MyDeeds from './MyDeeds';
import DeedForm from './DeedForm';

const DeedsContainer = () => {
	return (
		<div>
			<MyDeeds />

			<DeedForm />
		</div>
	);
};
// export default connect()(DeedsContainer);
export default DeedsContainer;
