import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
// import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/student" component={StudentManagement} />
			</Routes>
		</div>
	)
}

export default App
