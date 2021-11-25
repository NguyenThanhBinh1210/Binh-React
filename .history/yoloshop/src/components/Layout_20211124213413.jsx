import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routess from '../routes/Routess'

export default function Layout() {
	return (
		<BrowserRouter>
			<Route
				render={props => (
					<div>
						<div className="container">
							<Header {...props} />
							<div className="main">
								<Routess />
							</div>
						</div>
						<Footer />
					</div>
				)}
			/>
		</BrowserRouter>
	)
}
