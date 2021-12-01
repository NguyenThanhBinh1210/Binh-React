import { createSlice } from '@reduxjs/toolkit'
export const register = createAsyncThunk('auth/register', async () => {})
const auth = createSlice({
	name: 'auth',
	initialState: {}
})

const authReducer = auth.reducer
export default authReducer
