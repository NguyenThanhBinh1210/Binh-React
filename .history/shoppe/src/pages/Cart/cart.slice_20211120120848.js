import { createAsyncThunk } from '@reduxjs/toolkit'
import { payloadCreator } from 'src/utils/helper'

export const getCartPurchases = createAsyncThunk(
	'cart/getCartPurchases',
	payloadCreator(purchaseApi.getCartPurchases)
)
