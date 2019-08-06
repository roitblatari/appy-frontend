export const currentUser = (user) => {
	return {
		type: 'SET_CURRENT_USER',
		user
	};
};

// async
export const login = (credentials) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(credentials)
		});
	};
};
