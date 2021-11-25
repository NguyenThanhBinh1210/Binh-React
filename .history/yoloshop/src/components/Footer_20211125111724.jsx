import React from 'react'
import Grid from './Grid'

const footerAboutLinks = [
	{
		display: 'Giới thiệu',
		path: '/about'
	},
	{
		display: 'Liên hệ',
		path: '/contact'
	},
	{
		display: 'Tuyển dụng',
		path: '/about'
	},
	{
		display: 'Tin tức',
		path: '/about'
	},
	{
		display: 'Hệ thống cửa hàng',
		path: '/about'
	}
]

const footerCustomLinks = [
	{
		display: 'Chính sách đổi trả',
		path: '/about'
	},

	{
		display: 'Chính sách bảo hành',
		path: '/about'
	},

	{
		display: 'Chính sách hoàn tiền',
		path: '/about'
	}
]

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1} gap={10}>
					<div>
						<div className="footer__title">Tổng đài hỗ trợ</div>
						<div className="footer__content">
							<p>
								Liên hệ đặt hàng <strong>0388685356</strong>
							</p>
							<p>
								Thắc mắc đơn hàng <strong>0388685356</strong>
							</p>
							<p>
								Góp ý khiếu nại <strong>0388685356</strong>
							</p>
						</div>
					</div>
					<div>
						<div className="footer__title">Về Yolo</div>
						<div className="footer__content">
							{footerAboutLinks.map((item, i) => (
								<p>
									Liên hệ đặt hàng <strong>0388685356</strong>
								</p>
							))}
						</div>
					</div>
				</Grid>
			</div>
		</footer>
	)
}
