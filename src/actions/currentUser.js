export const setCurrentUser = (user) => {
	return {
		type: 'SET_CURRENT_USER',
		user
	};
};

// async
export const login = (credentials) => {
	console.log('credentials are: ', credentials);

	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/login', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then((r) => r.json())
			.then((user) => {
				if (user.error) {
					console.log(user.error);
				} else {
					dispatch(setCurrentUser(user));
				}
			});
	};
};

export const getCurrentUser = () => {
	// console.log('credentials are: ', credentials);

	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/get_current_user', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.json())
			.then((user) => {
				if (user.error) {
					console.log(user.error);
				} else {
					dispatch(setCurrentUser(user));
				}
			});
	};
};
