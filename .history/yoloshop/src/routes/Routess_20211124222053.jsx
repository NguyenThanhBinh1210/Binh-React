import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'

const Routess = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<Route path="/catalog/:slug" component={Product}></Route>
			<Route path="/catalog" component={Catalog}></Route>
			<Route path="/cart" component={Cart}></Route>
		</Switch>
	)
}

export default Routess
