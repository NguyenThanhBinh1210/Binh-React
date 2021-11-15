import axios from 'axios'
import LocalStorage from 'src/constants/localStorage'

// Gọi getUsers thì cần token
// Gọi products thì không cần token

class Http {
	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_API,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.instance.interceptors.response.use(
			response => {
				const results = { ...response.data, status: response.status }
				return results
			},
			({ response }) => {
				const results = { ...response.data, status: response.status }
				return Promise.reject(results)
			}
		)
		this.instance.interceptors.request.use(
			config => {
				const accessToken = localStorage.getItem(LocalStorage.accessToken)
				if (accessToken) {
					config.headers.authorization = accessToken
				}
				return config
			},
			error => {
				return Promise.reject(error.response)
			}
		)
	}
	get(url, config = null) {
		return this.instance.get(url, config)
	}
	post(url, data, config = null) {
		return this.instance.post(url, data, config)
	}
	put(url, data, config = null) {
		return this.instance.put(url, data, config)
	}
	get(url, config = null) {
		return this.instance.get(url, config)
	}
}
