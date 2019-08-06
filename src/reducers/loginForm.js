const initialState = {
	username: '',
	email: '',
	passwod: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_LOGIN_FORM':
			return action.formDate;
		default:
			return state;
	}
};
