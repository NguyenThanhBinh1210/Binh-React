import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
	return (
		<Router>
			<Route
				render={props => (
					<div>
						<div className="container">
							<Header {...props} />
							<div className="main">
								<Routes />
							</div>
						</div>
					</div>
				)}
			/>
		</Router>
	)
}
