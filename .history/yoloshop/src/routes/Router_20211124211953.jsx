import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={Home}></Route>
			<Route path="/catalog/:slug" element={Product}></Route>
			<Route path="/catalog" element={Catalog}></Route>
			<Route path="/" element={Home}></Route>
		</Routes>
	)
}

export default Router
