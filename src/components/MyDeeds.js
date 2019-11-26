import React from 'react';
import { connect } from 'react-redux';

import DeedCard from './DeedCard';

const MyDeeds = (props) => {
	if (props.deeds) {
		const deedCards = props.deeds.map((d) => <DeedCard deed={d} key={d.attributes.id} />);
		return deedCards;
	} else {
		return 'no cards';
	}
};

const mapStateToPprops = (state) => {
	return {
		deeds: state.myDeeds
	};
};
export default connect(mapStateToPprops)(MyDeeds);
