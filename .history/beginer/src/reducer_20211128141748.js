import { combineReducers } from 'redux'
import counterReducer from './components/Counter/counter.reducer.js'
import profileReducer from './components/Profile/profile.reducer.js'

// combineReducers
const rootReducer = combineReducers({
	counter: counterReducer,
	profile: profileReducer
})

export default rootReducer
