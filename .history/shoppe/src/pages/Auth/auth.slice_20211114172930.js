import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const register = createAsyncThunk('auth/')

const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
