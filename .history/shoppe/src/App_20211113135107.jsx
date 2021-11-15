import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import Router from './Router'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router />
		</div>
	)
}

export default App
