import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import RouterLink from './Routes'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Routes />
		</div>
	)
}

export default App
