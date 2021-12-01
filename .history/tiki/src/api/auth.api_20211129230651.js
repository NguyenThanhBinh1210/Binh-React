const authApi = {
	register(data) {
		return http.get('register', data)
	}
}
