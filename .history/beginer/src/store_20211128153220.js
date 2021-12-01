// import { applyMiddleware, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer.js'
// const composeEnhancers =
// 	(process.env.NODE_ENV === 'development' &&
// 		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 	compose
// createStore giúp tạo store cho ta, nhận vào 2 tham số là rootReducer bên reducer.js và composeEnhancers
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const store = configureStore({
	reducer: rootReducer,
	devTool: process.env.NODE_ENV !== 'production'
})

export default store
