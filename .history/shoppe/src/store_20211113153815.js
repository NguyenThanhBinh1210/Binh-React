import authReducer from './pages/Auth/auth.slice'
import {} from '@reduxjs/toolkit'

const rootReducer = {
	auth: authReducer
}

const store = configureStore({
	reducer: rootReducer,
	devTool: process.env.NODE_ENV === 'development',
	middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})
