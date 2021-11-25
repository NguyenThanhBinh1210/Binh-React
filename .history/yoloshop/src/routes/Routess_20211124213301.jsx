import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'

const Routess = () => {
	return (
		<Switch>
			<Route path="/" element={Home}></Route>
			<Route path="/catalog/:slug" element={Product}></Route>
			<Route path="/catalog" element={Catalog}></Route>
			<Route path="/cart" element={Cart}></Route>
		</Switch>
	)
}

export default Routess
