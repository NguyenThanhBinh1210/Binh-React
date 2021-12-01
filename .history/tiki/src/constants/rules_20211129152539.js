import { isEmail } from 'src/utils/helper'

export const rules = {
	fullName: {
		required: {
			value: true,
			message: 'Bạn chưa nhập Tên đầy đủ'
		}
	},
	email: {
		required: {
			value: true,
			message: 'Bạn chưa nhập Email'
		},
		validate: {
			email: v => isEmail(v) || 'Email không đúng định dạng'
		}
	},
	password: {
		required: {
			value: true,
			message: 'Bạn chưa nhập Mật khẩu'
		},
		minLength: {
			value: 6,
			message: 'Mật khẩu phải có từ 6 kí tự trở lên'
		}
	}
}
