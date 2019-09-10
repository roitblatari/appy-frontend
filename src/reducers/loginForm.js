const initialState = {
	username: '',
	// email: '',
	password: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_LOGIN_FORM':
			return action.formData;
		case 'CLEAR_CURRENT_USER':
			return initialState;
		default:
			return state;
	}
};
