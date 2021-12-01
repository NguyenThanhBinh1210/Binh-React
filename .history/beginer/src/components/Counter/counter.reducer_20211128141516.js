import * as types from './counter.constants'

// Giá trị khởi tạo là initialState
const initialState = {
	count: 0
}
// CounterReducer là 1 function có 2 tham số , là state và action
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.INCREASE:
			return { count: state.count + 1 }
		case types.DECREASE:
			return { count: state.count - 1 }
		default:
			return state
	}
}
export default counterReducer
