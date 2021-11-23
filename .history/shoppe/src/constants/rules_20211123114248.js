import { isEmail } from 'src/utils/helper'

export const rules = {
	name: {
		maxLength: {
			value: 160,
			message: 'Tên có độ dài tối đa là 160 kí tự'
		}
	},
	phone: {
		maxLength: {
			value: 20,
			message: 'Số điện thoại có độ dài tối đa là 20 kí tự'
		}
	},
	name: {
		maxLength: {
			value: 160,
			message: 'Tên có độ dài tối đa là 160 kí tự'
		}
	},
	email: {
		required: {
			value: true,
			message: 'Email là bắt buộc nhập'
		},
		minLength: {
			value: 5,
			message: 'Email có độ dài từ 5 - 160 kí tự'
		},
		maxLength: {
			value: 160,
			message: 'Email có độ dài từ 5 - 160 kí tự'
		},
		validate: {
			email: v => isEmail(v) || 'Email không đúng định dạng'
		}
	},
	password: {
		required: {
			value: true,
			message: 'Mật khẩu là bắt buộc nhập'
		},
		minLength: {
			value: 6,
			message: 'Mật khẩu có độ dài từ 6 - 32 kí tự'
		},
		maxLength: {
			value: 32,
			message: 'Mật khẩu có độ dài từ 6 - 32 kí tự'
		}
	},
	confirmPassword: {
		required: {
			value: true,
			message: 'Nhập lại là bắt buộc'
		}
	}
}
