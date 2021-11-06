import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { path } from '../App'

export default function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to={path.home}>Home</Link>
				</li>
				<li>
					<Link to={path.register}>Register</Link>
				</li>
				<li>
					<Link to={path.student}>Student</Link>
				</li>
				<li>
					<Link to={path.profile}>Profile</Link>
				</li>
			</ul>
		</div>
	)
}
