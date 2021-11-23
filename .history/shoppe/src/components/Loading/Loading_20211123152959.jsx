import React from 'react'
import './loading.css'
import { LinearProgress } from '@material-ui/core'

export default function Loading() {
	return (
		<div className="container-loading">
			<div class="double-loading">
				<div class="c1"></div>
				<div class="c2"></div>
			</div>
		</div>
	)
}
