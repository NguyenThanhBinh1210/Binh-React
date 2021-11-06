import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<>
			<Switch>
				<Route path="/register" component={Register} />
			</Switch>
		</>
	)
}

export default App
