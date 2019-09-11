import { resetLoginForm } from './loginForm.js';
import { getMyDeeds } from './myDeeds.js';

export const setCurrentUser = (user) => {
	return {
		type: 'SET_CURRENT_USER',
		user
	};
};

export const clearCurrentUser = () => {
	return {
		type: 'CLEAR_CURRENT_USER'
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
					dispatch(getMyDeeds());
					dispatch(resetLoginForm());
				}
			});
	};
};
export const logout = () => {
	// console.log('credentials are: ', credentials);

	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/logout', {
			credentials: 'include',
			method: 'DELETE'
		}).then(dispatch(clearCurrentUser()));
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
					dispatch(getMyDeeds());
				}
			});
	};
};

// export const CurrentUser = () => {
// 	// console.log('credentials are: ', credentials);

// 	return (dispatch) => {
// 		fetch('http://localhost:3000/api/v1/get_current_user', {
// 			credentials: 'include',
// 			method: 'GET',
// 			headers: {
// 				'content-type': 'application/json'
// 			}
// 		})
// 			.then((r) => r.json())
// 			.then((user) => {
// 				if (user.error) {
// 					console.log(user.error);
// 				} else {
// 					dispatch(setCurrentUser(user));
// 				}
// 			});
// 	};
// };
