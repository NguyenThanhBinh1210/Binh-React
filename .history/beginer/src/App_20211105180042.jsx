import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<>
			<Switch>
				<Route path="/register" component={Register} />
				<Route path="/student" component={StudentManagement} />
			</Switch>
		</>
	)
}

export default App
