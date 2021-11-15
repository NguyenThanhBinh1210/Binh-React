import { isEmail } from 'src/utils/helper'

export const rules = {
	email: {
		required: {
			value: true,
			message: 'Email là bắt buộc nhập'
		},
		minLength: {
			value: 5,
			message: 'Email có độ dài từ 6 - 100 kí tự'
		},
		maxLength: {
			value: 100,
			message: 'Email có độ dài từ 6 - 100 kí tự'
		}
	}
}
