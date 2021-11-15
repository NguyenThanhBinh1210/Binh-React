import authReducer from './pages/Auth/auth.slice'

const rootReducer = {
	auth: authReducer
}

const store = configureStore({
	reducer: rootReducer,
	devTool: process.env.NODE_ENV === 'development',
	middleware: [...getDefaultMiddleware({ serializableCheck })]
})
