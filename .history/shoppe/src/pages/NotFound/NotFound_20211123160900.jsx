import React from 'react'
import { Helmet } from 'react-helmet'
import './notFound.scss'
export default function NotFound() {
	return (
		<div className="notFound">
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<div className="notFound__icon">
				<img
					src="https://deo.shopeemobile.com/shopee/shopee-mall-live/images/ic_no_404@2x.png"
					alt=""
				/>
			</div>
			<div className="notFound__title">404</div>
		</div>
	)
}
