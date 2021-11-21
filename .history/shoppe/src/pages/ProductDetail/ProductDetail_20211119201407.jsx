import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getIdFromNameId } from 'src/utils/helper'
import { getProductDetail } from './productDetail.slice'
import * as S from './productDetail.style'

export default function ProductDetail() {
	const [product, setProduct] = useState()
	const dispatch = useDispatch()
	const { idProduct } = useParams()
	useEffect(() => {
		const realId = getIdFromNameId(idProduct)
		dispatch(getProductDetail(realId))
			.then(unwrapResult)
			.then(res => {
				setProduct(res.data)
			})
	}, [idProduct, dispatch])
	return (
		<div>
			{product && (
				<div className="container">
					<S.ProductBriefing>
						<S.ProductImages>
							<S.ProductImageActive>
								<img src={product.image} alt="" />
							</S.ProductImageActive>
							<S.ProductImageSlider>
								<S.ProductIconPrev>
									<svg
										enableBackground="new 0 0 13 20"
										viewBox="0 0 13 20"
										x={0}
										y={0}
										className="shopee-svg-icon icon-arrow-left-bold"
									>
										<polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
									</svg>
								</S.ProductIconPrev>
								{product.images.map((image, index) => (
									<S.ProductImage>
										<img src={image} alt="" />
									</S.ProductImage>
								))}
							</S.ProductImageSlider>
						</S.ProductImages>
					</S.ProductBriefing>
				</div>
			)}
		</div>
	)
}
