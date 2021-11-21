import { createAsyncThunk } from '@reduxjs/toolkit'
import { payloadCreator } from 'src/utils/helper'

export const getProductDetail = createAsyncThunk(
	'productDetail/getProductDetail',
	payloadCreator(productApi.getProductDetail)
)
