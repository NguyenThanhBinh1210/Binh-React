import React from 'react'
import { Route, Routes } from 'react-router'
import { path } from './constants/path'
import Home from './pages/Home/Home'

export default function Router() {
	return (
		<Routes>
			<Route path={path.home} exact>
				<Home />
			</Route>
		</Routes>
	)
}
