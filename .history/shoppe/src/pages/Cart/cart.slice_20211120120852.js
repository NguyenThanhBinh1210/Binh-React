import { createAsyncThunk } from '@reduxjs/toolkit'
import purchaseApi from 'src/api/purchase.api'
import { payloadCreator } from 'src/utils/helper'

export const getCartPurchases = createAsyncThunk(
	'cart/getCartPurchases',
	payloadCreator(purchaseApi.getCartPurchases)
)
