import React from 'react'
import { Link } from 'react-router-dom'

const LeftMenu = () => {
	return (
		<div>
			<div className="logo">KingShop</div>
			<ul className="list-util">
				<li className="util">
					<Link to="">
						<i className="bx bx-left-arrow-alt"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default LeftMenu
