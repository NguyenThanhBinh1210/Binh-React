import React from 'react'
import { Link } from 'react-router-dom'

const LeftMenu = () => {
	return (
		<div>
			<div className="logo">KingShop</div>
			<ul className="list-util">
				<li className="util">
					<Link to="">
						<i className="bx bx-user-circle"></i>
					</Link>
					<Link to="">
						<i className="bx bx-search"></i>
					</Link>
					<Link to="">
						<i className="bx bx-shopping-bag"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default LeftMenu
