import http from 'src/utils/http'

const authApi = {
	register() {
		return http.post('register')
	}
}
