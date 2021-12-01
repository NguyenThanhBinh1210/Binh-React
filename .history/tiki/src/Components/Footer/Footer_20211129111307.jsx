import React from 'react'
import Grid from '../Grid/Grid'

const footerTitle = [
	{
		display: 'Hỗ trợ khách hàng'
	},
	{
		display: 'Về KingShop'
	},
	{
		display: 'Hợp tác liên kết'
	},
	{
		display: 'Kết nối với chúng tôi'
	}
]

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1}>
					{footerTitle.map((item, i) => (
						<div className="footer__item" key={i}>
							<div className="footer__title">{item.display}</div>
							<div></div>
						</div>
					))}
				</Grid>
			</div>
		</footer>
	)
}

export default Footer
