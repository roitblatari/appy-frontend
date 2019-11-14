const initialState = {
	username: '',
	email: '',
	image_url: '',
	password: ''
};

export default (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case 'UPDATE_SIGNUP_FORM':
			return action.formData;
		// case 'CLEAR_CURRENT_USER':
		// 	return initialState;
		default:
			return state;
	}
};
