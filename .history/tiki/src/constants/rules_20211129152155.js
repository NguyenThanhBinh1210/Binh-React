import { isEmail } from 'src/utils/helper'

export const rules = {
	email: {
		required: {
			value: true,
			message: 'Bạn chưa nhập email'
		},
		validate: {
			email: v => isEmail(v) || 'Email không đúng định dạng'
		}
	}
}
