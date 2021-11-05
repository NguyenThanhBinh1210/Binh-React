import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/student" component={StudentManagement} />
			</Switch>
		</div>
	)
}

export default App
