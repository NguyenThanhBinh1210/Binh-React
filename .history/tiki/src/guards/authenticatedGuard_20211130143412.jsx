import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'

export default function authenticatedGuard({ children }) {
	const authenticated = useAuthenticated()

	if (authenticated) {
		return <Redirect></Redirect>
	}
	return <Fragment> {children}</Fragment>
}
