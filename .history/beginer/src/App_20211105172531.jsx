import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes path="/register" component={Register} />
				<Routes path="/student" component={StudentManagement} />
			</BrowserRouter>
		</div>
	)
}

export default App
