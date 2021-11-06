import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

export const path = {
	register: '/register',
	student: '/student'
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={path.register} element={<Register />} />
					<Route path={path.student} element={<StudentManagement isLogged />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
