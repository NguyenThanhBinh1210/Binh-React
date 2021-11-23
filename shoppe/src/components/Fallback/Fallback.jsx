import React from 'react'
import './fallback.css'

export default function Fallback() {
	return (
		<div className="container-loading">
			<div class="double-loading">
				<div class="c1"></div>
				<div class="c2"></div>
			</div>
		</div>
	)
}
