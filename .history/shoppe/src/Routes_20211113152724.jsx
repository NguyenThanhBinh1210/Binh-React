import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { path } from './constants/path'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Router() {
	return (
		<Routes>
			<Route path={path.home} element={<Home />} exact></Route>
			<Route path={path.login} element={<Login />}></Route>
			<Route path={path.register} element={<Register />}
				<Register />
			</Route>
			<Route path={path.notFound}>
				<NotFound />
			</Route>
		</Routes>
	)
}
