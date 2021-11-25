import React from 'react'
import logo from '../assets/images/Logo-2.png'
import { Link } from 'react-router-dom'

const mainNav = [
	{
		display: 'Trang chủ',
		path: '/'
	},
	{
		display: 'Sản phẩm',
		path: '/catalog'
	},
	{
		display: 'Phụ kiện',
		path: '/accessories'
	},
	{
		display: 'Liên hệ',
		path: '/contact'
	}
]
export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="header__menu">
					<div className="header__menu__left">
						<div className="header__menu__mobile-toggle">
							<i class="bx bx-menu-alt-left"></i>
						</div>
						{mainNav.map((item, index) => (
							<div key={index} className="header__menu__left__item">
								<Link to={item.path}>
									<span>{item.display}</span>
								</Link>
							</div>
						))}
					</div>
					<div className="header__menu__right">
						<div className="header__menu__right__item"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
