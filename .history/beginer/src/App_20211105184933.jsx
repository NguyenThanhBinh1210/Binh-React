import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/register" component={Register} />
				<Route path="/student" component={StudentManagement} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
