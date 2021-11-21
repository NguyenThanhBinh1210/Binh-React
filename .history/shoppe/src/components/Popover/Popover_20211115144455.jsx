import React from 'react'

export default function Popover() {
	return (
		<S.Drawer>
			<S.PopoverArrow />
			<S.PopoverContent>
				<S.UserLink to="">Tài khoản của tôi</S.UserLink>
				<S.UserLink to="">Đơn mua</S.UserLink>
				<S.UserButton to={path.home}>Đăng xuất</S.UserButton>
			</S.PopoverContent>
		</S.Drawer>
	)
}
