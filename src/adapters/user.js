class User {

	// fetches to backend to log user in
	static login(userParams) {
		const userJSON = JSON.stringify(userParams)
		return fetch('https://product-syndicator-api.herokuapp.com/api/v1/login', {
			method: 'post',
			body: userJSON,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(res => res.json())
	}

	static logOut() {
		localStorage.clear()
	}
}


export default User