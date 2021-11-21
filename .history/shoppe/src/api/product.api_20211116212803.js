import http from 'src/utils/http'
const URL = 'categories'

export const productApi = {
	getProducts() {
		return http.get('products')
	}
}
