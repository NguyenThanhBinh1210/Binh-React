import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { path } from '../App'

export default function Header() {
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
					<Link to={path.student}>Student</Link>
				</li>
			</ul>
		</div>
	)
}
