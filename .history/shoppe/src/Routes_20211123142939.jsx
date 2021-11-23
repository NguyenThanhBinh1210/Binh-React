import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Cart from ''
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import User from './pages/User/User'

const Home = lazy(() => import('./pages/Cart/Cart'))

export default function Router() {
	return (
		<Routes>
			<Route
				path={path.home}
				element={
					<MainLayout>
						<Home />
					</MainLayout>
				}
				// exact
			></Route>
			<Route
				path={path.productDetail}
				element={
					<MainLayout>
						<ProductDetail />
					</MainLayout>
				}
				// exact
			></Route>
			<Route
				path={path.login}
				element={
					<UnAuthenticatedGuard>
						<RegisterLayout title="Đăng nhập">
							<Login />
						</RegisterLayout>
					</UnAuthenticatedGuard>
				}
			></Route>
			<Route
				path={path.register}
				element={
					<UnAuthenticatedGuard>
						<RegisterLayout title="Đăng ký">
							<Register />
						</RegisterLayout>
					</UnAuthenticatedGuard>
				}
			></Route>
			<Route
				path={path.user + '/*'}
				element={
					<AuthenticatedGuard>
						<MainLayout>
							<User />
						</MainLayout>
					</AuthenticatedGuard>
				}
			/>

			<Route
				path={path.cart}
				element={
					<AuthenticatedGuard>
						<CartLayout>
							<Cart />
						</CartLayout>
					</AuthenticatedGuard>
				}
			/>
			<Route path={path.notFound} element={<NotFound />}></Route>
		</Routes>
	)
}
