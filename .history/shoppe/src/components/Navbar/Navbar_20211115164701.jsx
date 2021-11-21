import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import Popover from '../Popover/Popover'
import * as S from './navbar.style'
export default function Navbar() {
	const authenticated = useAuthenticated()
	const profile = useSelector(state => state.auth.profile)
	const { activePopover, showPopover, hidePopover } = usePopover()

	return (
		<S.Navbar>
			<S.NavConnection>
				<S.ConnectLink to="">Kênh người bán</S.ConnectLink>
				<S.ConnectLink to="">Trở thành người bán Shopee</S.ConnectLink>
				<S.ConnectLink to="">Tải ứng dụng</S.ConnectLink>
				<S.ConnectLink to="">Kết nối</S.ConnectLink>
			</S.NavConnection>
			<S.NavMenu>
				<li>Thông báo</li>
				<li>Hỗ trợ</li>
				{authenticated && (
					<li>
						<S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
							<S.UserImage src="https://cf.shopee.vn/file/f9d28d9bb95ebcb62a7f2803b5bfd29e_tn"></S.UserImage>
							<S.UserName>{profile.name || profile.email}</S.UserName>
							<Popover active={activePopover}>
								<S.UserLink to="">Tài khoản của tôi</S.UserLink>
								<S.UserLink to="">Đơn mua</S.UserLink>
								<S.UserButton to={path.login}>Đăng xuất</S.UserButton>
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