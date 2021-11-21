import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './productItem.style'
export default function ProductItem() {
	return (
		<S.Product>
			<Link to="">
				<S.ProductItem>
					<S.ProductItemImage>
						<img
							src="https://cf.shopee.vn/file/64cc6e5365663b97de6a51b303be7d35"
							alt=""
						/>
					</S.ProductItemImage>
					<S.ProductItemInfo>
						<S.ProductItemTitle>
							Giày thể thao nữ kiểu dáng học sinh ROS
						</S.ProductItemTitle>
						<S.ProductItemPrice>
							<S.ProductItemPriceOriginal>
								<smail>đ</smail>87.000
							</S.ProductItemPriceOriginal>
							<S.ProductItemPriceSale>
								<smail>đ</smail>78.000
							</S.ProductItemPriceSale>
						</S.ProductItemPrice>
					</S.ProductItemInfo>
				</S.ProductItem>
			</Link>
		</S.Product>
	)
}
