import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

const LeftMenu = () => {
	return (
		<div>
			<div className="logo">KingShop</div>
			<ul className="list-util">
				<li className="list-util__item">
					<Link to={path.user}>
						<i className="bx bx-user-circle"></i>
					</Link>
				</li>
				<li className="list-util__item">
					<i className="bx bx-search"></i>
				</li>
				<li className="list-util__item">
					<Link to={path.cart}>
						<i className="bx bx-shopping-bag"></i>
					</Link>
				</li>
			</ul>
			<ul className="list-category">
				<li className="list-category__item">
					<Link to="">Đồng hồ</Link>
				</li>
				<li className="list-category__item">
					<Link to="">Áo thun</Link>
				</li>
				<li className="list-category__item">
					<Link to="">Điện thoại</Link>
				</li>
			</ul>
		</div>
	)
}

export default LeftMenu
