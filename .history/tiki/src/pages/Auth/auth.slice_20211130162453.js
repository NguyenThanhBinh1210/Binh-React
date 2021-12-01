import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'
// Cú pháp mặc định đừng sửa tầm bậy
export const register = createAsyncThunk(
	'auth/register',
	payloadCreator(authApi.register)
)
export const login = createAsyncThunk(
	'auth/login',
	payloadCreator(authApi.login)
)
export const logout = createAsyncThunk(
	'auth/logout',
	payloadCreator(authApi.logout)
)

// Tạo func cho việc xử lí extrareducer
const handleAuthFulfilled = (state, action) => {
	const { user, access_token } = action.payload.data
	// Gán lại cái state.profile
	state.profile = user
	// Lưu nó lên localStorage
	localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
	localStorage.setItem(LocalStorage.accessToken, access_token)
}

const auth = createSlice({
	name: 'auth',
	// Khi vừa mở app sẽ kiểm tra xem trong localStorage đã có tài khoản chưa, làm như dưới
	initialState: {
		profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
	},
	extraReducers: {
		[register.fulfilled]: handleAuthFulfilled,
		[login.fulfilled]: handleAuthFulfilled,
		// Gọi logout
		[logout.fulfilled]: state => {
			state.profile = {}
			localStorage.removeItem(LocalStorage.user)
			localStorage.removeItem(LocalStorage.access_token)
		}
	}
})

const authReducer = auth.reducer
export default authReducer
