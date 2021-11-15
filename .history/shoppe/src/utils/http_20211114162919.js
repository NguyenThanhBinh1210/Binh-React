import axios from 'axios'

class Http {
	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_API
		})
	}
}
