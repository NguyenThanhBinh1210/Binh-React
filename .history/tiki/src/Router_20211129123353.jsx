import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Router() {
	return (
		<Switch>
			<Route path={path.home} exact>
				<Home />
			</Route>
			<Route path={path.login}>
				<RegisterLayout>
					<Login />
				</RegisterLayout>
			</Route>
			<Route path={path.register}>
				<RegisterLayout>
					<Registe />
				</RegisterLayout>
			</Route>
			<Route path={path.notFound}>
				<NotFound />
			</Route>
		</Switch>
	)
}
