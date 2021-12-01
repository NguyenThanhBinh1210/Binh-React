import { compose, createStore } from 'redux'
import rootReducer from './reducer.js'
const composeEnhancers =
	(process.env.NODE_ENV === 'development' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose
// createStore giúp tạo store cho ta, nhận vào 2 tham số là rootReducer bên reducer.js và composeEnhancers để check
const store = createStore(rootReducer, composeEnhancers())

export default store
