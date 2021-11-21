import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Navigate } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function UnAuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated()
	if (authenticated) {
		return <Navigate to={path.home} />
	}
	return <Fragment>{children}</Fragment>
}

UnAuthenticatedGuard.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
}
