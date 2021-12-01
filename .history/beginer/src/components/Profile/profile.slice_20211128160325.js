import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserApi } from '../../api'
export const getUser = createAsyncThunk('profile/getUser', async () => {
	const res = await getUserApi
	return res
})
const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		profile: {}
	},
	extraReducer: {}
})
