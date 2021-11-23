import React from 'react'
import * as S from './purchase.style'

export default function Purchase() {
	return (
		<div>
			<S.PurchaseTabs>
				<S.PurchaseTabItem to="">Tất cả</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Chờ xác nhận</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Chờ lấy hàng</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đang vận chuyển</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đã giao</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đã hủy</S.PurchaseTabItem>
			</S.PurchaseTabs>
			<S.PurchaseList>
				<S.OrderCard>
					<S.OderCardContent>
						<S.OderCardDetail>
							<img src="https://cf.shopee.vn/file/0c6b05420dd5d32f15ccbc212796fe3a_tn" />
						</S.OderCardDetail>
					</S.OderCardContent>
				</S.OrderCard>
			</S.PurchaseList>
		</div>
	)
}
