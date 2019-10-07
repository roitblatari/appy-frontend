// // const initialState = {
// // 	myDeeds: []
// // };

export default (state = [], action) => {
	switch (action.type) {
		case 'SET_MY_DEEDS':
			// console.log('action.deeds:', action.deeds);
			return action.deeds;
		case 'ADD_DEED':
			return [ ...state, action.deed ];
		case 'DELETE_DEED':
			const deeds = state.filter((deed) => deed.id !== String(action.deedId));
			return deeds;
		default:
			return state;
	}
};
