import * as types from './profile.constants'

export const getUserPending = () => ({
	type: types.GET_USER_PENDING
})
// payload là dữ liệu mà người dùng truyền lên
export const getUserFullfilled = payload => ({
	type: types.GET_USER_FULLFILLED,
	// khi thất bại sẽ trả về payload
	payload
})
export const getUserRejected = payload => ({
	type: types.GET_USER_REJECTED,
	payload
})
