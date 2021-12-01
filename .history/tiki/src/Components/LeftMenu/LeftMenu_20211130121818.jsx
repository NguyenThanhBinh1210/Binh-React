import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

const LeftMenu = () => {
	return (
		<div>
			<div className="logo">KingShop</div>
			<ul className="list-util">
				<li className="util">
					<Link to={path.user}>
						<i className="bx bx-user-circle"></i>
					</Link>
				</li>
				<li className="util">
					<i className="bx bx-search"></i>
				</li>
				<li className="util">
					<Link to={path.cart}>
						<i className="bx bx-shopping-bag"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default LeftMenu
