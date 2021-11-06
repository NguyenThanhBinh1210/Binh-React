import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { path } from '../App'

export default function Header() {
	const history = useNavigate()
	console.log(history)
	return (
		<div>
			<ul>
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
			</ul>
		</div>
	)
}
