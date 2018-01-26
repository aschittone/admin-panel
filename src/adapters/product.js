class Product {

	static create(state, token) {
		const productJSON = JSON.stringify(state)
		return fetch('http://localhost:3000/api/v1/products', {
			method: 'post',
			body: productJSON,
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(res => res.json())
	}
}

export default Product