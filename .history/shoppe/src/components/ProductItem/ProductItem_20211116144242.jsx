import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './productItem.style'
export default function ProductItem() {
	return (
		<S.Product>
			<Link to="">
				<S.ProductItem>
					<S.ProductItemImage>
						<img src="https://cf.shopee.vn/file/64cc6e5365663b97de6a51b303be7d35" alt='/>
					</S.ProductItemImage>
				</S.ProductItem>
			</Link>
		</S.Product>
	)
}
