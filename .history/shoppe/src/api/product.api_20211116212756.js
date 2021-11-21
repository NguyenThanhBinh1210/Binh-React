import http from 'src/utils/http'

export const productApi = {
	getProducts() {
		return http.get('products')
	}
}
