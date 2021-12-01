import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserApi } from '../../api'
export const getUser = createAsyncThunk('profile/getUser', async () => {
	const res = await getUserApi
	return res
})
const profileSlice = createSlice({
	name: 'profileSuper',
	initialState: {
		profile: {}
	},
	extraReducer: {
		[getUser.fulfilled]: (state, action) => {
			state.profile = action.payload
		}
	}
})

const profileReducer = profileSlice.reducer
export default profileReducer
