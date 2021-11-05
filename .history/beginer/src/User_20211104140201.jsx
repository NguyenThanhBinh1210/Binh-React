import React from 'react'
import UserProfile from './UserProfile'

// const connect = Component => props => {
// 	const data = [1, 2, 3, 4]
// 	return <Component {...props} data={data} />
// }

// const UserProfileWrapper = connect(UserProfile)

export default function User() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<div>User</div>
			<button>Change Count</button>
			<UserProfile />
		</div>
	)
}
