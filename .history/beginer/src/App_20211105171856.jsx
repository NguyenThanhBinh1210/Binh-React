import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes path="/register" components={Register} />
				<Routes path="/student" components={StudentManagement} />
			</BrowserRouter>
			{/* <StudentManagement /> */}
		</div>
	)
}

export default App
