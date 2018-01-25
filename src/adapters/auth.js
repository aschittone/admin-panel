class Auth {
	// Auth adapter for user authentication (used in other files)

	// fetches to backend to log user in
	static login(userParams) {
		const userJSON = JSON.stringify(userParams)
		return fetch('http://localhost:3000/api/v1/login', {
			method: 'post',
			body: userJSON,
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(res => res.json())
	}
}

export default Auth