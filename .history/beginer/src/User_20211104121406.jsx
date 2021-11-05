import React, { useEffect, useState } from 'react'

export default function User() {
	const [profile, userProfile] = useState({
		name: 'binh',
		address: {
			company: 'Long mai',
			home: 'Minh long'
		}
	})
}
