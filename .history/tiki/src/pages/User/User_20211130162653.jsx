import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Auth/auth.slice'

const User = () => {
	const dispatch = useDispatch()
	const handleLogout = () => dispatch(logout())
	return (
		<div>
			<button>Đăng xuất</button>
		</div>
	)
}

export default User
