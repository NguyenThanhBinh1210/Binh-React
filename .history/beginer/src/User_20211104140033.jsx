import React from 'react'
import UserProfile from './UserProfile'

// const connect = Component => props => {
// 	const data = [1, 2, 3, 4]
// 	return <Component {...props} data={data} />
// }

// const UserProfileWrapper = connect(UserProfile)

export default function User() {
	return (
		<div>
			<div>User</div>
			<UserProfileWrapper />
		</div>
	)
}
