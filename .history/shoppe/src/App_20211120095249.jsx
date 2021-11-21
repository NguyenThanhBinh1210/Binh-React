import React from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routess from './Routes'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<div className="App">
			<Routess />
			<ToastContainer />
		</div>
	)
}

export default App
