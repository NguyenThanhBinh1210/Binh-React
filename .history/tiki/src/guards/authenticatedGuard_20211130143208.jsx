import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/Hooks/useAuthenticated'

export default function authenticatedGuard({ children }) {
	const authenticated = useAuthenticated()

	return <Fragment> {children}</Fragment>
}
