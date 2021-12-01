import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const HeaderRegister = ({ title }) => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="header__brand">
						<Link to="/" className="header__logo">
							KingShop
						</Link>
						<div className="header__title">{title}</div>
					</div>
					<div className="header__help">
						<Link to="/">Cần giúp đỡ ?</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderRegister
HeaderRegister.propTypes = {
	title: PropTypes.string
}
