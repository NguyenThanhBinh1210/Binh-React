import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
	getUserFullfilled,
	getUserPending,
	getUserRejected
} from './profile.action'
import { getUserApi } from '../../api.js'

export default function Profile() {
	const profile = useSelector(state => state.profile.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUserPending())
		getUserApi()
			.then(res => {
				dispatch(getUserFullfilled(res))
			})
			.catch(err => {
				dispatch(getUserRejected(err))
			})
	}, [dispatch])
	return (
		<div>
			<div>Name: {profile.name}</div>
			<div>Age:{profile.age}</div>
		</div>
	)
}
