import React, { useState } from 'react'

export default function User() {
	const [profile, setProfile] = useState({
		name: 'Binh',
		address: {
			company: 'Long mai',
			home: 'Minh long'
		}
	})

	const [count, setCount] = useState(0)

	const changeProfile = () => {
		const _profile = { ...profile }
		_profile.address.company = 'Long son'
		setProfile(_profile)
	}

	return (
		<div>
			<div>Ten: {profile.name}</div>
			<div>Dia chi:</div>
			<div>Cong ti: {profile.address.company}</div>
			<div>Nha: {profile.address.home}</div>
			<button onClick={changeProfile}>Change Profile</button>
		</div>
	)
}
