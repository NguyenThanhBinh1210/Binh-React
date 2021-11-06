import React from 'react'

export default function ProfileInfo() {
	return (
		<div>
			<h1>Profile</h1>
			<ul>
				<li>
					<Link to={path.profileInfo}> Profile Info</Link>
				</li>
				<li>
					<Link to={path.profilePerchase}> Profile Perchase</Link>
				</li>
			</ul>
		</div>
	)
}
