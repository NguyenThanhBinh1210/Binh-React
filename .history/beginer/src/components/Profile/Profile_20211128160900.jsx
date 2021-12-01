import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import {
// 	getUserFullfilled,
// 	getUserPending,
// 	getUserRejected
// } from './profile.action'
// import { getUserApi } from '../../api.js'
import { getUser } from './profile.slice'

export default function Profile() {
	const profile = useSelector(state => state.profileSuper.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		// getUser()(dispatch)
		dispatch(getUser())
	}, [dispatch])
	return (
		<div>
			<div>Name: {profile.name}</div>
			<div>Age:{profile.age}</div>
		</div>
	)
}
