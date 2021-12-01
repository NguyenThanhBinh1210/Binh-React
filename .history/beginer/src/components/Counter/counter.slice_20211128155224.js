import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter', // prefix cho việc tạo action type
	initialState: {
		count: 0
	},
	reducer: {
		increase: (state, action) => {
			state.count = state.count + 1
		}
	}
})
