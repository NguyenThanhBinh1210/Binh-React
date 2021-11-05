import React, { memo } from 'react'

const UserProfile = memo(
	props => {
		console.log('UserProfile', props)
		return (
			<div>
				<div>User Profile</div>
			</div>
		)
	},
	(prevProps, nextProps) => {
		return (
			prevProps.profile.name === nextProps.profile.name &&
			prevProps.profile.age === nextProps.profile.age
		)
	}
)

export default UserProfile
