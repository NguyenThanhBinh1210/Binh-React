import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import Routess from './Routes'
import { Route, Routes } from 'react-router'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route>
					<Routess />
				</Route>
			</Routes>
		</div>
	)
}

export default App
