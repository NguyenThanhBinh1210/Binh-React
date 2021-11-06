import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Profile() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to={path.profile}> </NavLink>
				</li>
			</ul>
		</div>
	)
}
