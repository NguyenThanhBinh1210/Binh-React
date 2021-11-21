import React, { useEffect } from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routess from './Routes'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { unauthorize } from './pages/Auth/auth.slice'
import { path } from './constants/path'

function App() {
	const status = useSelector(state => state.app.status)
	const dispatch = useDispatch()
	const history = useNavigate()
	useEffect(() => {
		if (status === 401) {
			dispatch(unauthorize())
			history(path.login)
		}
	}, [dispatch, status, history])
	return (
		<div className="App">
			<Routess />
			{/* <ToastContainer /> */}
		</div>
	)
}

export default App
