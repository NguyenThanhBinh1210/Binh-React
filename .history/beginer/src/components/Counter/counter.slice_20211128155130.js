import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter', // prefix cho việc tạo action type
	initialState: {
		count: 0
	}
})
