import React from 'react'
import UserProfile from './UserProfile'

const connect = Component => props => {
	return <Component {...props} />
}

export default function User() {
	return (
		<div>
			<div>User</div>
			<UserProfile />
		</div>
	)
}
