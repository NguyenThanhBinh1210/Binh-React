// import * as types from './counter.constants'
import { createAction, createReducer } from '@reduxjs/toolkit'
// Giá trị khởi tạo là initialState

export const increase = createAction('counter/increase')
export const decrease = createAction('counter/decrease')
const initialState = {
	count: 0
}
// CounterReducer là 1 function có 2 tham số , là state và action
const counterReducer = createReducer(initialState, {
	'counter/increase': (state, action) => {
		state.count = state.count + 1
	},
	'counter/decrease': (state, action) => {
		state.count = state.count - 1
	}
})
// => {
// 	// Mỗi khi 1 action đc dispatch(gửi đi) thì counterReducer sẽ chạy:
// 	// Check tùy kiểu action mới chạy: dùng switch case
// 	switch (action.type) {
// 		case types.INCREASE:
// 			return { count: state.count + 1 }
// 		case types.DECREASE:
// 			return { count: state.count - 1 }
// 		default:
// 			return state
// 	}
// }
export default counterReducer
