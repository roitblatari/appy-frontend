export const setMyDeeds = (deeds) => {
	return {
		type: 'SET_MY_DEEDS',
		deeds
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
