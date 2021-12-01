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
	},
	phoneNumber: {
		required: {
			value: true,
			message: 'Bạn chưa nhập số điện thoại'
		},
		minLength: {
			value: 9,
			message: 'Yêu cầu số điện thoại thật'
		},
		maxLength: {
			value: 10,
			message: 'Yêu cầu số điện thoại thật'
		},
		validate: {
			numberPhone: v => isPhone(v) || 'Email không đúng định dạng'
		}
	}
}
