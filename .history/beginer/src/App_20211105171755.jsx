import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/register" components={Register} />
				<Route path="/student" components={StudentManagement} />
			</BrowserRouter>
			{/* <StudentManagement /> */}
			<Register />
		</div>
	)
}

export default App
