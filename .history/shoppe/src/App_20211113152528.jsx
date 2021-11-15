import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import Routess from './Routes'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="users/*" element={<Users />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
