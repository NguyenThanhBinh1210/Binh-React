import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseApi from 'src/api/purchase.api'
import { payloadCreator } from 'src/utils/helper'

export const getCartPurchases = createAsyncThunk(
	'cart/getCartPurchases',
	payloadCreator(purchaseApi.getCartPurchases)
)

const cart = createSlice({
	name: 'cart',
	initialState: {
		purchases: []
	},
	extraReducers: {
		[getCartPurchases.fulfilled]: (state, action) => {
			state.purchases = action.payload.data
		}
	}
})
