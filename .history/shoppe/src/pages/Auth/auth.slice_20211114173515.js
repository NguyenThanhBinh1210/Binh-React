import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const register = createAsyncThunk('auth/register', async data => {
	try {
		const res = await authApi.register(data)
	} catch (error) {}
})

const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
