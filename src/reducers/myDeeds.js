// const initialState = {
// 	myDeeds: []
// };

export default (state = [], action) => {
	switch (action.type) {
		case 'SET_MY_DEEDS':
			return {
				// ...state,
				myDeeds: action.deeds
			};
		// return action.deeds;
		// case 'CLEAR_CURRENT_USER':
		// 	return initialState;
		default:
			return state;
	}
};
