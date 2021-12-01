import React from 'react'
import { Link } from 'react-router-dom'

const HeaderRegister = () => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="header__brand">
						<Link to="/" className="header__logo">
							KingShop
						</Link>
					</div>
					<div className="header__title">{title}</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderRegister
