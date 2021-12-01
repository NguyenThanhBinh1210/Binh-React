import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import localStorage from 'src/constants.localStorage'
// Cú pháp mặc định đừng sửa tầm bậy
export const register = createAsyncThunk(
	'auth/register',
	async (data, thunkAPI) => {
		try {
			const res = await authApi.register(data)
			return res
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
const auth = createSlice({
	name: 'auth',
	initialState: { profile: {} },
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			// Gán lại cái state.profile
			state.profile = action.payload.data
			// Lưu nó lên localStorage
			localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
		}
	}
})

const authReducer = auth.reducer
export default authReducer
