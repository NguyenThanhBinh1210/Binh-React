import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'

import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import UserLayout from './layouts/UserLayout/UserLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import User from './pages/User/User'
import ModalSearch from './Components/ModalSearch/ModalSearch'

export default function Router() {
	return (
		<Switch>
			<Route path={path.home} exact>
				<MainLayout>
					<Home />
				</MainLayout>
			</Route>
			<Route path={path.login}>
				<UnAuthenticatedGuard>
					<RegisterLayout title="Đăng nhập">
						<Login />
					</RegisterLayout>
				</UnAuthenticatedGuard>
			</Route>
			<Route path={path.register}>
				<UnAuthenticatedGuard>
					<RegisterLayout title="Đăng ký">
						<Register />
					</RegisterLayout>
				</UnAuthenticatedGuard>
			</Route>
			<Route path={path.user}>
				<AuthenticatedGuard>
					<UserLayout>
						<User />
					</UserLayout>
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
