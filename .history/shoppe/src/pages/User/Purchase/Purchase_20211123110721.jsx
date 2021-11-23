import React from 'react'
import * as S from './purchase.style'

export default function Puchase() {
	return (
		<S.PuchaseTabs>
			<S.PuchaseTabItem to="">Tất cả</S.PuchaseTabItem>
			<S.PuchaseTabItem to="">Chờ xác nhận</S.PuchaseTabItem>
			<S.PuchaseTabItem to="">Đang vận chuyển</S.PuchaseTabItem>
			<S.PuchaseTabItem to="">Đã giao</S.PuchaseTabItem>
			<S.PuchaseTabItem to="">Đã hủy</S.PuchaseTabItem>
		</S.PuchaseTabs>
	)
}
