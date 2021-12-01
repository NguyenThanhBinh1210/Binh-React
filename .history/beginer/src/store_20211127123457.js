import { compose, createStore } from 'redux'
import rootReducer from './reducer.js'
const composeEnhancers =
	(process.env.NODE_ENV === 'development' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose
const store = createStore(rootReducer, composeEnhancers())

export default store
