// import { combineReducers } from 'redux'
import counterReducer from './components/Counter/counter.reducer.js'
import profileReducer from './components/Profile/profile.reducer.js'

// combineReducers nhận vào 1 object chứa:
// const rootReducer = combineReducers({
// 	// counterReducer bên couter.reduce.js
// 	counter: counterReducer,
// 	profile: profileReducer
// })
const rootReducer = {
	// counterReducer bên couter.reduce.js
	counter: counterReducer,
	profileSuper: profileReducer
}

export default rootReducer
