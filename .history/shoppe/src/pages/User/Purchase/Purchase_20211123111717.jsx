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
					<S.OrderCardContent>
						<S.OrderCardDetail>
							<img
								src="https://cf.shopee.vn/file/0c6b05420dd5d32f15ccbc212796fe3a_tn"
								alt=""
							/>
							<S.OrderContent>
								<S.OderName>
									Áo Sweater Nam Nữ Coffeee, Áo Hoodie form rộng unisex ST55
								</S.OderName>
								<S.OderQuantity>x 1</S.OderQuantity>
							</S.OrderContent>
						</S.OrderCardDetail>
						<S.OderCartPrice>đ1000</S.OderCartPrice>
					</S.OrderCardContent>
					<S.OrderCardButtonsContainer>
						<S.PurchaseButton to="">Xem sản phẩm</S.PurchaseButton>
						<S.TotalPrice>
							<S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
							<S.TotalPricePrice>đ2000</S.TotalPricePrice>
						</S.TotalPrice>
					</S.OrderCardButtonsContainer>
				</S.OrderCard>
			</S.PurchaseList>
		</div>
	)
}
