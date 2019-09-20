// const initialState = {
// 	myDeeds: []
// };

export default (state = [], action) => {
	switch (action.type) {
		case 'SET_MY_DEEDS':
			// console.log('action.deeds:', action.deeds);
			return action.deeds;

		// return action.deeds;
		// case 'CLEAR_CURRENT_USER':
		// 	return (state = initialState);
		default:
			return state;
	}
};
