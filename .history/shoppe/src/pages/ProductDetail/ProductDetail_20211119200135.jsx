import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getIdFromNameId } from 'src/utils/helper'
import { getProductDetail } from './productDetail.slice'

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
	}, [idProduct])
	return <div>ProductDetail</div>
}
