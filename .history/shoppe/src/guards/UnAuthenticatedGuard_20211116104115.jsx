import React, { Fragment } from 'react'

export default function UnAuthenticatedGuard({ children }) {
	return <Fragment>{children}</Fragment>
}
