import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={Home}></Route>
			<Route path="/catalog/:slug" element={Product}></Route>
			<Route path="/" element={Home}></Route>
			<Route path="/" element={Home}></Route>
		</Routes>
	)
}

export default Router
