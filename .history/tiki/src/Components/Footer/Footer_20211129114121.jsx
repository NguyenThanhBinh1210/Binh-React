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
	},
	{
		display: 'Tải ứng dụng trên điện thoại'
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
						<div className="footer__title">{footerTitle[3].display}</div>
						<ul className="footer__content">
							<span>
								<Link to="">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
											fill="#3B5998"
										></path>
										<path
											d="M17.6676 26.0742V17.3693H20.0706L20.389 14.3696H17.6676L17.6717 12.8682C17.6717 12.0858 17.7461 11.6666 18.8698 11.6666H20.372V8.6665H17.9687C15.082 8.6665 14.066 10.1217 14.066 12.5689V14.3699H12.2666V17.3696H14.066V26.0742H17.6676Z"
											fill="white"
										></path>
									</svg>
								</Link>
							</span>
							<div className="footer__title">{footerTitle[5].display}</div>
							<ul className="footer__content">
								{footerReal.map((item, i) => (
									<li className="" key={i}>
										<Link to={item.path}>{item.display}</Link>
									</li>
								))}
							</ul>
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
