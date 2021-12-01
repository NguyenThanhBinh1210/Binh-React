import React, { Fragment } from 'react'

export default function authenticatedGuard({ children }) {
	return <Fragment> {children}</Fragment>
}
