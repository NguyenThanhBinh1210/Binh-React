import React, { useEffect, useState } from 'react'

export default function User() {
	const [profile, setProfile] = useState({
		name: 'binh',
		address: {
			company: 'Long mai',
			home: 'Minh long'
		}
	})

	const changeProfile = () => {
		const _profile = { ...profile }
		_profile.address.company = 'Long son'
		setProfile(_profile)
	}
}
