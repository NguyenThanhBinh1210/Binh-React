import authReducer from './pages/Auth/auth.slice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
	auth: authReducer
}

const store = configureStore({
	reducer: rootReducer,
	devTool: process.env.NODE_ENV !== 'production'
})
export default store
