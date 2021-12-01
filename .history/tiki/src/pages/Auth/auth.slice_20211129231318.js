import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Cú pháp mặc định đừng sửa tầm bậy
export const register = createAsyncThunk('auth/register', async () => {})
const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
