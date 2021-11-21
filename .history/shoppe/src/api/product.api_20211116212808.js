import http from 'src/utils/http'
const URL = 'products'

export const productApi = {
	getProducts() {
		return http.get('products')
	}
}
