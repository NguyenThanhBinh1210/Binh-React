import http from 'src/utils/http'

const URL = 'purchase'
const purchaseApi = {
	addToCart(data) {
		return http.post(`${URL}/add-to-cart`, data)
	}
}
export default purchase
