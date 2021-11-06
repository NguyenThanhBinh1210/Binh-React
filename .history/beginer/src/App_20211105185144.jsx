import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/register" element=(<Register/>) />
					<Route path="/student" component={StudentManagement} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
