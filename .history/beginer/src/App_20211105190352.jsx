import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const path = {
	register: '/register',
	student: '/student'
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route
						path="/student/:studentId"
						element={<StudentManagement isLogged />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
