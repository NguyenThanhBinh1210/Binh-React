import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import StudentManagement from './pages/StudentManagement'
import Register from './pages/Register'
import { BrowserRouter, Route } from './react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/register" />
			</BrowserRouter>
			{/* <StudentManagement /> */}
			<Register />
		</div>
	)
}

export default App
