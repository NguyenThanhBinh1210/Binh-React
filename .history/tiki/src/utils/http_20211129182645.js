import axios from 'axios'
import { toast } from 'react-toastify'
import LocalStorage from 'src/constants/localStorage'

// Đây là cú pháp không được sửa tầm bậy
class Http {
	constructor() {
		this.instance = axios.create({
			// Đây là giai đoạn lấy Api về
			baseURL: process.env.REACT_APP_API,
			// Thời gian hết hạn khi gọi api
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// Tạo interceptors, interceptors giống như 1 trung gian khi ta gọi Api nó sẽ đi qua interceptors
		// Dùng để cấu hình dữ liệu trả về hoặc truyền lên

		//-Bước:1.. Cấu hình dữ liệu trả về
		this.instance.interceptors.response.use(
			response => {
				// Vì axios trả về rất nhiều thứ nhưng mình chỉ muốn lấy data từ api và status nên làm như sau:
				const result = { ...response.data, status: response.status }
				return result
			},
			// Còn đây là phần khi bị lỗi
			({ response }) => {
				// Nếu gặp lỗi 401 thì trả về toast là:
				if (response.status === 401) {
					toast.error(response.data.message, {
						position: 'top-center',
						autoClose: 3000
					})
				}
				const result = { ...response.data, status: response.status }
				return Promise.reject(result)
			}
		)
		//-Bước:1.. Cấu hình dữ liệu trả đưa lên
		// Gọi getUser thì cần token , gọi products thì không cần token
		this.instance.interceptors.request.use(
			config => {
				// khi mình login hoặc register thành công thì nó sẽ trả về cho mình 1 cái accessToken và mình sẽ lưu nó vào localStorage xem ở file localStorage, bây h thì minhg lấy nó ra
				const accessToken = localStorage.getItem(LocalStorage.accessToken)
				// Nếu có accessToken thì gán accessToken lên authorization ở headers
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
	delete(url, data, config = null) {
		return this.instance.delete(url, {
			data,
			...config
		})
	}
}

const http = new Http()
export default http
