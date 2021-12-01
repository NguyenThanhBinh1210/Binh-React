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

const footerSupportLink = [
	{
		display: 'Các câu hỏi thường gặp',
		path: '/suports'
	},
	{
		display: 'Gửi yêu cầu hỗ trợ',
		path: '/suports'
	},
	{
		display: 'Hướng dẫn đặt hàng',
		path: '/suports'
	},
	{
		display: 'Phương thức vận chuyển',
		path: '/suports'
	},
	{
		display: 'Chính sách đổi trả',
		path: '/suports'
	},
	{
		display: 'Hướng dẫn trả góp',
		path: '/suports'
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
							<div className="footer__list__link">
								{footerSupportLink.map((item, index) => {
									;<div className="footer__link" key={index}>
										{item.display}
									</div>
								})}
							</div>
						</div>
					))}
				</Grid>
			</div>
		</footer>
	)
}

export default Footer
