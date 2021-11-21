import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'

export default function UnAuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated
	if (!authenticated) {
		return <Redirect></Redirect>
	}
	return <Fragment>{children}</Fragment>
}
