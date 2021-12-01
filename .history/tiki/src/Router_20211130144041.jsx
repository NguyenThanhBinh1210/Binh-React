import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'

import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import User from './pages/User/User'

export default function Router() {
	return (
		<Switch>
			<Route path={path.home} exact>
				<MainLayout>
					<Home />
				</MainLayout>
			</Route>
			<Route path={path.login}>
				<unauthenticatedGuard>
					<RegisterLayout title="Đăng nhập">
						<Login />
					</RegisterLayout>
				</unauthenticatedGuard>
			</Route>
			<Route path={path.register}>
				<UnauthenticatedGuard>
					<RegisterLayout title="Đăng ký">
						<Register />
					</RegisterLayout>
				</UnauthenticatedGuard>
			</Route>
			<Route path={path.user}>
				<AuthenticatedGuard>
					<User />
				</AuthenticatedGuard>
			</Route>
			<Route path={path.cart}>
				<Cart />
			</Route>
			<Route path={path.notFound}>
				<NotFound />
			</Route>
		</Switch>
	)
}
