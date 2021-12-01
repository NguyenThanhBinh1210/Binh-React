import React from 'react'
import { Link } from 'react-router-dom'
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
	},
	{
		display: 'Chứng nhận bởi'
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

const footerAboutLink = [
	{
		display: 'Giới thiệu KingShop',
		path: '/about'
	},
	{
		display: 'Tuyển dụng',
		path: '/about'
	},
	{
		display: 'Chính sách bảo mật thanh toán',
		path: '/about'
	},
	{
		display: 'Chính sách giải quyết khiếu nại',
		path: '/about'
	},
	{
		display: 'Điều khoản sử dụng',
		path: '/about'
	},
	{
		display: 'Bảo hành doanh nghiệp',
		path: '/about'
	}
]

const footerCoop = [
	{
		display: 'Quy chế hoạt động',
		path: '/co-op'
	},
	{
		display: 'Bán hàng cùng KingShop',
		path: '/co-op'
	}
]

const footerReal = [
	{
		display: 'BinhMaiDinh',
		path: '/real'
	},
	{
		display: 'SonTungMtp',
		path: '/real'
	}
]

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<Grid col={4} mdCol={2} smCol={1}>
					<div>
						<div className="footer__title">{footerTitle[0].display}</div>
						<ul className="footer__content">
							{footerSupportLink.map((item, i) => (
								<li className="" key={i}>
									<Link to={item.path}>{item.display}</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div className="footer__title">{footerTitle[1].display}</div>
						<ul className="footer__content">
							{footerAboutLink.map((item, i) => (
								<li className="" key={i}>
									<Link to={item.path}>{item.display}</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div className="footer__title">{footerTitle[2].display}</div>
						<ul className="footer__content">
							{footerCoop.map((item, i) => (
								<li className="" key={i}>
									<Link to={item.path}>{item.display}</Link>
								</li>
							))}
							<div className="footer__title">{footerTitle[4].display}</div>
							<ul className="footer__content">
								{footerReal.map((item, i) => (
									<li className="" key={i}>
										<Link to={item.path}>{item.display}</Link>
									</li>
								))}
							</ul>
						</ul>
					</div>
				</Grid>
			</div>
		</footer>
	)
}

export default Footer
