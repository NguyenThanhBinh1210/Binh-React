import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'

export default function Router() {
	return (
		<Switch>
			<Route path={path.home} exact>
				<Home />
			</Route>
		</Switch>
	)
}
