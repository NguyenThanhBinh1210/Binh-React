import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const register = createAsyncThunk('auth/register', async() => {
	try {
		const res = await 
	} catch (error) {
		
	}
})

const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
