import React from 'react'
import { Route, Routes } from 'react-router'
import { path } from './constants/path'
import Login from './pages/Auth/Login/Login'
import Home from './pages/Home/Home'

export default function Router() {
	return (
		<Routes>
			<Route path={path.home} exact>
				<Home />
			</Route>
			<Route path={path.login}>
				<Login />
			</Route>
			<Route path={path.login}>
				<Home />
			</Route>
			<Route path={path.home}>
				<Home />
			</Route>
		</Routes>
	)
}
