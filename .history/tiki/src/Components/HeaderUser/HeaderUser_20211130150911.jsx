import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function HeaderUser() {
	return (
		<div className="header-user">
			<h1>Trang thông tin</h1>
			<div>
				<Link to={path.home}>Trang chủ > </Link>
				<span>Trang thông tin</span>
			</div>
		</div>
	)
}
