import http from 'src/utils/http'
const authApi = {
	register(data) {
		return http.get('register', data)
	}
}

export default authApi
