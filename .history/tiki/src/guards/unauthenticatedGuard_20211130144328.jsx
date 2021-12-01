import React, { Fragment } from 'react'
import { useAuthenticatedGuard } from 'src/Hooks/useAuthenticatedGuard'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function UnauthenticatedGuard({ children }) {
	const authenticated = useAuthenticatedGuard()

	if (authenticated) {
		return <Redirect to={path.home} />
	}
	return <Fragment> {children}</Fragment>
}
