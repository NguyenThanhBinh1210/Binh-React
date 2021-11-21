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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	)
}

export default App
