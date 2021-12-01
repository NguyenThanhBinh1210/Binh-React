import * as types from './profile.constants'

export const getUserPending = () => ({
	type: types.GET_USER_PENDING
})
export const getUserFullfilled = payload => ({
	type: types.GET_USER_FULLFILLED,
	payload
})
export const getUserRejected = payload => ({
	type: types.GET_USER_REJECTED,
	payload
})
