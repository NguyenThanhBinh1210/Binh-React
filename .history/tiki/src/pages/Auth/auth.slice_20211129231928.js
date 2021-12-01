import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
// Cú pháp mặc định đừng sửa tầm bậy
export const register = createAsyncThunk(
	'auth/register',
	async (data, thunkAPI) => {
		try {
			const res = await authApi.register(data)
			return res
		} catch (error) {
			return thunkAPI
		}
	}
)
const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
