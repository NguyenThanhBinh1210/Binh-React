import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'

const LeftMenu = () => {
	const authenticated = useAuthenticated()
	const search = useRef(null)
	const searchToggle = () => search.current.classList.toggle('active')

	return (
		<div className="left-menu">
			<div className="logo">
				<Link to={path.home}>KingShop</Link>
			</div>
			<ul className="list-util">
				{authenticated && (
					<li className="list-util__item">
						<Link to={path.user}>
							<i className="bx bx-user-circle"></i>
						</Link>
					</li>
				)}
				{!authenticated && (
					<li className="list-util__item">
						<Link to={path.login}>
							<i className="bx bx-user-circle"></i>
						</Link>
					</li>
				)}
				<li className="list-util__item" onClick={searchToggle}>
					<i className="bx bx-search"></i>
				</li>
				<li className="list-util__item">
					<Link to={path.cart}>
						<i className="bx bx-shopping-bag"></i>
					</Link>
					<div className="badge">5</div>
				</li>
			</ul>
			<div className="left-menu__search">
				<i className="bx bx-search"></i>
				<input type="text" placeholder="Tim kiem" />
			</div>
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
			<ul className="contact">
				<li className="contact__item">
					<Link to="">
						<i className="bx bxl-facebook-circle"></i>
					</Link>
				</li>
				<li className="contact__item">
					<Link to="">
						<i className="bx bxl-youtube"></i>
					</Link>
				</li>
				<li className="contact__item">
					<Link to="">
						<i className="bx bxl-instagram"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default LeftMenu
