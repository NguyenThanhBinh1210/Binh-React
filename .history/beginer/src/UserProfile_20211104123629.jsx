import React, { useState } from 'react'

export default function UserProfile({ profile }) {
	useState(() => {
		profile.name = 'John Smith'
	}, [profile])
}
