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
			<Route path={path.login}>
				<Home />
			</Route>
			<Route path={path.register}>
				<Home />
			</Route>
			<Route path={path.home}>
				<Home />
			</Route>
		</Switch>
	)
}
