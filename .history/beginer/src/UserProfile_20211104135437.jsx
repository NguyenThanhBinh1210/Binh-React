import React from 'react'

export default function UserProfile({ profile }) {
	useState(() => {
		profile.name = 'John Smith'
	}, [profile])

	return (
		<div>
			<h2>User Profile</h2>
		</div>
	)
}
