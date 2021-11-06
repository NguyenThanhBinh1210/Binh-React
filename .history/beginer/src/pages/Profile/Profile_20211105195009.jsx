import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from '../App'

export default function Profile() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to={path.profileInfo}> Profile Ìno</NavLink>
				</li>
			</ul>
		</div>
	)
}
