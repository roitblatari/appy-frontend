export const updateLoginForm = (formData) => {
	// console.log(formData);
	return {
		type: 'UPDATE_LOGIN_FORM',
		formData
	};
};

export const resetLoginForm = () => {
	// console.log(formData);
	return {
		type: 'RESET_CURRENT_USER'
	};
};
