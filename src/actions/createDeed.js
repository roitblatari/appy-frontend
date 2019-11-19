import { getMyDeeds } from './myDeeds.js';
// export const updateDeedForm = (formData) => {
// 	// console.log(formData);
// 	return {
// 		type: 'UPDATE_DEED_FORM',
// 		formData
// 	};
// };

export const setDeed = (deed) => {
	return {
		type: 'ADD_DEED',
		deed
	};
};

export const createDeed = (credentials) => {
	// console.log('credentials are: ', credentials);
	// debugger;
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/deeds', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ deed: credentials })
		})
			.then((r) => r.json())
			.then((deed) => {
				if (deed.error) {
					console.log(deed.error);
				} else {
					// debugger;
					console.log(deed);
					// dispatch(setDeed(deed.data));
					dispatch(getMyDeeds());
					window.history.back();

					// dispatch(resetDeedForm());
				}
			});
	};
};
