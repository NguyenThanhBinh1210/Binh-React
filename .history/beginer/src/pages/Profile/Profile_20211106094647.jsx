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
					<NavLink to={path.profileInfo}> Profile Info</NavLink>
				</li>
				<li>
					<Link to={path.profilePerchase}> Profile Perchase</Link>
				</li>
			</ul>

			<Routes>
				<Route path={path.profileInfo} element={<ProfileInfo />} />
				<Route path={path.profilePerchase} element={<ProfilePerchase />} />
			</Routes>
		</div>
	)
}
