import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function UnauthenticatedGuard({ children }) {
	const authenticated = useAuthenticated()

	if (authenticated) {
		return <Redirect to={path.home} />
	}
	return <Fragment> {children}</Fragment>
}
