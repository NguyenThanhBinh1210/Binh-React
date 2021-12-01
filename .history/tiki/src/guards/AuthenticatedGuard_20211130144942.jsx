import React, { Fragment } from 'react'
import { Redirect } from 'react-router'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'

export default function AuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated()
	if (!authenticated) {
		;<Redirect to={path.login} />
	}
	return <Fragment>{children}</Fragment>
}
