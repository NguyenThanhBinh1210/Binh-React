import React, { useEffect } from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routess from './Routes'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'

function App() {
	const app = useSelector(state => state.app.status)
	useEffect(() => {}, [status])
	return (
		<div className="App">
			<Routess />
			<ToastContainer />
		</div>
	)
}

export default App
