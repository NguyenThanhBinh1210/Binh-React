import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../App'

export default function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to={path.register}>Register</Link>
				</li>
				<li>
					<Link to={path.student}>Student</Link>
				</li>
			</ul>
		</div>
	)
}
