import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'
import PropTypes from 'prop-types'
import { path } from 'src/constants/path'
import { generateNamId } from 'src/utils/helper'

export default function ProductItem({ product }) {
	return (
		<S.Product>
			<Link to={path.product + `/${generateNamId(product)}`}>
				<S.ProductItem>
					<S.ProductItemImage>
						<img src={product.image} alt="" />
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
						<S.ProductItemMeta>
							<ProductRating />
							<S.ProductItemSold>
								<span>1.7k</span>
								<span>Đã bán</span>
							</S.ProductItemSold>
						</S.ProductItemMeta>
					</S.ProductItemInfo>
				</S.ProductItem>
			</Link>
		</S.Product>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object
}
