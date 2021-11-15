import React from 'react'
import { Route, Routes } from 'react-router'
import { path } from './constants/path'

export default function Router() {
	return (
		<Routes>
			<Route path={path.home} exact></Route>
		</Routes>
	)
}
