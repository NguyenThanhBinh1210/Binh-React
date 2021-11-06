import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to={path}>Register</Link>
				</li>
				<li>
					<Link>Student</Link>
				</li>
			</ul>
		</div>
	)
}
