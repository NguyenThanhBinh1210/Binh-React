import { isEmail } from 'src/utils/helper'

export const rules = {
	email: {
		required: {
			value: true,
			message: 'Email là bắt buộc nhập'
		}
	}
}
