import React, { memo } from 'react'

const UserProfile = memo(props => {
	console.log('UserProfile', props)
	return (
		<div>
			<div>User Profile</div>
		</div>
	)
})

export default UserProfile
