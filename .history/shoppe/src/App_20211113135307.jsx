import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import RouterLink from './RouterLink'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Routes>
				<RouterLink />
			</Routes>
			,
		</div>
	)
}

export default App
