import React from 'react'
import Checkbox from 'src/components/Checkbox/Checkbox'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController.jsx'
import * as S from './cart.style.js'

export default function Cart() {
	return (
		<div className="container">
			<div>
				<S.ProductHeader>
					<S.ProductHeaderCheckbox>
						<Checkbox />
					</S.ProductHeaderCheckbox>
					<S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
					<S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
					<S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
					<S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
					<S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
				</S.ProductHeader>
				<S.ProductSection>
					<S.CartItem>
						<S.CartItemCheckbox>
							<Checkbox />
						</S.CartItemCheckbox>
						<S.CartItemOverview>
							<S.CartItemOverviewImage to="">
								<img
									src="https://cf.shopee.vn/file/0c6b05420dd5d32f15ccbc212796fe3a_tn"
									alt=""
								/>
							</S.CartItemOverviewImage>
							<S.CartItemOverviewNameWrapper>
								<S.CartItemOverviewName to="">
									Áo Sweater Nam Nữ Coffeee, Áo Hoodie form rộng unisex ST55
								</S.CartItemOverviewName>
							</S.CartItemOverviewNameWrapper>
						</S.CartItemOverview>
						<S.CartItemUnitPrice>
							<span>đ100000</span>
							<span>đ200000</span>
						</S.CartItemUnitPrice>
						<S.CartItemQuantity>
							<ProductQuantityController />
						</S.CartItemQuantity>
						<S.CartItemTotalPrice>
							<span>đ100000</span>
						</S.CartItemTotalPrice>
						<S.CartItemAction>
							<S.CartItemActionButton>Xóa</S.CartItemActionButton>
						</S.CartItemAction>
					</S.CartItem>
				</S.ProductSection>
			</div>
			<S.CartFooter>
				<S.CartFooterCheckbox>
					<Checkbox />
				</S.CartFooterCheckbox>
				<S.CartFooterButton>Chọn tất cả</S.CartFooterButton>
				<S.CartFooterButton>Xóa</S.CartFooterButton>
				<S.CartFooterSpaceBetween />
			</S.CartFooter>
		</div>
	)
}
