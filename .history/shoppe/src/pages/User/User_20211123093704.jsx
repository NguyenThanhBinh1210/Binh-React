import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { path } from 'src/constants/path.js'
import Password from './Password/Password.jsx'
import Profile from './Profile/Profile.jsx'
import Purchase from './Purchase/Purchase.jsx'
import * as S from './user.style.js'

export default function User() {
	return (
		<div>
			<S.Container className="container">
				<S.Sidebar>
					<S.Brief>
						<S.BriefAvatar to="profile/">
							<img
								src="https://cf.shopee.vn/file/f9d28d9bb95ebcb62a7f2803b5bfd29e_tn"
								alt=""
							/>
						</S.BriefAvatar>
						<S.BriefRight>
							<S.Briefsername>king</S.Briefsername>
							<S.BriefEdit to="profile/">
								{' '}
								<svg
									width={12}
									height={12}
									viewBox="0 0 12 12"
									xmlns="http://www.w3.org/2000/svg"
									style={{ marginRight: 4 }}
								>
									<path
										d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
										fill="#9B9B9B"
										fillRule="evenodd"
									/>
								</svg>
								Sửa hồ sơ
							</S.BriefEdit>
						</S.BriefRight>
					</S.Brief>
					<S.SidebarMenu>
						<S.SidebarMenuEntry to="profile/">
							<S.SidebarMenuEntryIcon>
								<img
									src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
									alt=""
								/>
							</S.SidebarMenuEntryIcon>
							Tài khoản của tôi
						</S.SidebarMenuEntry>
						<S.SidebarMenuEntry to="password/">
							<S.SidebarMenuEntryIcon>
								<img
									src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
									alt=""
								/>
							</S.SidebarMenuEntryIcon>
							Đổi mật khẩu
						</S.SidebarMenuEntry>
						<S.SidebarMenuEntry to="purchase/">
							<S.SidebarMenuEntryIcon>
								<img
									src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
									alt=""
								/>
							</S.SidebarMenuEntryIcon>
							Đơn mua
						</S.SidebarMenuEntry>
					</S.SidebarMenu>
				</S.Sidebar>
				<S.Main>
					<Routes>
						<Route
							path="/"
							element={<Navigate to={path.user + path.profile} />}
						></Route>
						<Route path={path.profile.slice(1)} element={<Profile />} />
						<Route path={path.password.slice(1)} element={<Password />} />
						<Route path={path.purchase.slice(1)} element={<Purchase />} />
					</Routes>
				</S.Main>
			</S.Container>
		</div>
	)
}
