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
		<footer>
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1} gap={10}></Grid>
			</div>
		</footer>
	)
}
