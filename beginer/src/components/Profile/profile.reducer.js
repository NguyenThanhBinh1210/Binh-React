import * as types from './profile.constants'

const initialState = {
	profile: {}
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USER_FULLFILLED:
			return { profile: action.payload }
		default:
			return state
	}
}
export default profileReducer
