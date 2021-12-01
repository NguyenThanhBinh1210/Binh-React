import React, { Fragment } from 'react'
import { Redirect } from 'react-router'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'

export default function UnAuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated()
	if (authenticated) {
		return <Redirect to={path.home} />
	}
	return <Fragment>{children}</Fragment>
}
