import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from 'src/api/category.api'
import { payloadCreator } from 'src/utils/helper'

export const getCategories = createAsyncThunk(
	'home/getCategories',
	payloadCreator(categoryApi.getCategories)
)
export const getProducts = createAsyncThunk(
	'home/getCategories',
	payloadCreator(categoryApi.getCategories)
)
