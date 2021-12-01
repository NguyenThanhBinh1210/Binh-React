export const isEmail = val => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
export const isPhone = val => /[a-zA-z]/.test(val)

export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
	try {
		const res = await asyncFunc(arg)
		return res
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
}
