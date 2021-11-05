import React, { useState } from 'react'
import UserProfile from './UserProfile'

// const connect = Component => props => {
// 	const data = [1, 2, 3, 4]
// 	return <Component {...props} data={data} />
// }

// const UserProfileWrapper = connect(UserProfile)

export default function User() {
	const [count, setCount] = useState(0)
	console.log('User')
	return (
		<div>
			<div>User</div>
			<button onClick={() => setCount(count => count + 1)}>
				Change Count {count}
			</button>
			<UserProfile />
		</div>
	)
}
