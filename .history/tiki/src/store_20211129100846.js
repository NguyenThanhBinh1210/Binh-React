import authReducer from './pages/Auth/auth.slice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
	authking: authReducer
}

const store = configureStore({
	reducer: rootReducer,
	devTool: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({ serializableCheck: false })
	]
})
export default store
