import React, { useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { path } from '../App'
import './Header.scss'

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		// console.log(location)
	}, [location])

	return (
		<div>
			<ul className="list-group">
				<button onClick={() => navigate(-1)}> Trang trước</button>
				<li>
					<NavLink to={path.home}>Home</NavLink>
				</li>
				<li>
					<NavLink to={path.register}>Register</NavLink>
				</li>
				<li>
					<NavLink to={path.student}>Student</NavLink>
				</li>
				<li>
					<NavLink to={path.profile}>Profile</NavLink>
				</li>
				<button onClick={() => navigate(1)}> Trang sau</button>
			</ul>
		</div>
	)
}
