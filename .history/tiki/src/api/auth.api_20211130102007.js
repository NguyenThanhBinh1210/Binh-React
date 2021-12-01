import http from 'src/utils/http'
const authApi = {
	register(data) {
		return http.post('register', data)
	},
	login
}

export default authApi
