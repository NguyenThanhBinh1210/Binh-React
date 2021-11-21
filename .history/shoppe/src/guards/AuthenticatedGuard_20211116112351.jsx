import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Navigate } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function AuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated
	if (!authenticated) {
		return <Navigate to={path.login}></Navigate>
	}
	return <Fragment>{children}</Fragment>
}
