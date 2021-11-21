import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'

export default function UnAuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated
	return <Fragment>{children}</Fragment>
}
