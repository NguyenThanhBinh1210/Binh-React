import http from 'src/utils/http'

const userApi = {
	updateMe(data) {
		return http.put(`${URL}`, data)
	}
}

export default userApi
