import React from 'react'
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import { path } from '../../App'
import ProfileInfo from './profileItem/ProfileInfo'
import ProfilePerchase from './profileItem/ProfilePerchase'

export default function Profile() {
	return (
		<div>
			<h1>Profile</h1>
			<ul>
				<li>
					<NavLink to="info"> Profile Info</NavLink>
				</li>
				<li>
					<Link to="perchase"> Profile Perchase</Link>
				</li>
			</ul>
			<div>
				<Routes>
					<Route path="info" element={<ProfileInfo />} />
					<Route path="perchase" element={<ProfilePerchase />} />
				</Routes>
			</div>
		</div>
	)
}
