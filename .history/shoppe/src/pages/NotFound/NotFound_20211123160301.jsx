import React from 'react'
import { Helmet } from 'react-helmet'
import './notFound.scss'
export default function NotFound() {
	return (
		<div className="notFound">
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
		</div>
	)
}
