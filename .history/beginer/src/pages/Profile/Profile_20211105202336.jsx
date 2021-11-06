import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { path } from '../../App'
import ProfileInfo from './ProfileInfo'
import ProfilePerchase from './ProfilePerchase'

export default function Profile() {
	return (
		<div>
			<h1>Profile</h1>
			<ul>
				<li>
					<NavLink to={path.profileInfo}> Profile Info</NavLink>
				</li>
				<li>
					<NavLink to={path.profilePerchase}> Profile Perchase</NavLink>
				</li>
			</ul>
			<Routes>
				<Route path={path.profileInfo} element={<ProfileInfo />} />
				<Route path={path.profilePerchase} element={<ProfilePerchase />} />
			</Routes>
		</div>
	)
}
