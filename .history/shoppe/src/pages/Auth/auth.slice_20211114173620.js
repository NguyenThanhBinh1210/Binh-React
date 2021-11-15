import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'

export const register = createAsyncThunk(
	'auth/register',
	async (data, thunkAPI) => {
		try {
			const res = await authApi.register(data)
			return res
		} catch (error) {
			return thunkAPI.rejectWithValue
		}
	}
)

const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
