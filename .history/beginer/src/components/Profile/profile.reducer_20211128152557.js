import * as types from './profile.constants'
import produce from 'immer'
// Giá trị khởi tạo
const initialState = {
	profile: {}
}
// produce nhận vào state , và 1 callback nhận vào draft
const profileReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.GET_USER_FULLFILLED:
				return { profile: action.payload }
			default:
				return state
		}
	})
export default profileReducer
