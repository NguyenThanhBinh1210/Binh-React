import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import Routess from './Routes'
import Routes from 'react-router'
// import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Routes>
				<Routess />
			</Routes>
		</div>
	)
}

export default App
