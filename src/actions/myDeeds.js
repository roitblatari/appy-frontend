export const setMyDeeds = (deeds) => {
	return {
		type: 'SET_MY_DEEDS',
		deeds
	};
};

export const deleteThisDeed = (deedId) => {
	return {
		type: 'DELETE_DEED',
		deedId
	};
};

// async

export const getMyDeeds = () => {
	return (dispatch) => {
		// debugger;
		fetch('http://localhost:3000/api/v1/deeds', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.json())
			.then((response) => {
				if (response.error) {
					console.log(response.error);
				} else {
					console.log(response.data);

					dispatch(setMyDeeds(response.data));
				}
			});
	};
};

export const deleteDeed = (deedId) => {
	// console.log('credentials are: ', credentials);
	return (dispatch) => {
		fetch(`http://localhost:3000/api/v1/deeds/${deedId}`, {
			credentials: 'include',
			method: 'DELETE'
		})
			.then((response) => response.json())
			.then((response) => dispatch(deleteThisDeed(response)));
	};
};
/////////////////////////
// export const logout = () => {
// 	// console.log('credentials are: ', credentials);

// 	return (dispatch) => {
// 		fetch('http://localhost:3000/api/v1/logout', {
// 			credentials: 'include',
// 			method: 'DELETE'
// 		}).then(dispatch(clearCurrentUser()));
// 	};
// };
