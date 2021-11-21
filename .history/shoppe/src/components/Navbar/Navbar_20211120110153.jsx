import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import { logout } from 'src/pages/Auth/auth.slice'
import Popover from '../Popover/Popover'
import * as S from './navbar.style'
export default function Navbar() {
	const authenticated = useAuthenticated()
	const profile = useSelector(state => state.auth.profile)
	const { activePopover, showPopover, hidePopover } = usePopover()
	const dispatch = useDispatch()

	const handleLogout = () => dispatch(logout())
	return (
		<S.Navbar>
			<S.NavConnection>
				<S.ConnectLink to="">Kênh người bán</S.ConnectLink>
				<S.ConnectLink to="">Trở thành người bán Shopee</S.ConnectLink>
				<S.ConnectLink to="">Tải ứng dụng</S.ConnectLink>
				<S.ConnectLink to="">Kết nối</S.ConnectLink>
			</S.NavConnection>
			<S.NavMenu>
				<li>
					<svg
						viewBox="3 2.5 14 14"
						x={0}
						y={0}
						className="shopee-svg-icon icon-notification-2"
					>
						<path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
						<path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
					</svg>
					<span>Thông báo</span>
				</li>
				<li>Hỗ trợ</li>
				{authenticated && (
					<li>
						<S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
							<S.UserImage src="https://cf.shopee.vn/file/f9d28d9bb95ebcb62a7f2803b5bfd29e_tn"></S.UserImage>
							<S.UserName>{profile.name || profile.email}</S.UserName>
							<Popover active={activePopover}>
								<S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
								<S.UserLink to="">Đơn mua</S.UserLink>
								<S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
							</Popover>
						</S.User>
					</li>
				)}
				{!authenticated && (
					<Fragment>
						<li>
							<S.NavLink to={path.register}>Đăng ký</S.NavLink>
						</li>
						<li>
							<S.NavLink to={path.login}>Đăng Nhập</S.NavLink>
						</li>
					</Fragment>
				)}
			</S.NavMenu>
		</S.Navbar>
	)
}
