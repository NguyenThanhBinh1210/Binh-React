import React from 'react'
import Grid from '../Grid/Grid'

const footerTitleLink = [
	{
		display: 'Hỗ trợ khách hàng'
	}
]

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1}></Grid>
			</div>
		</footer>
	)
}

export default Footer
