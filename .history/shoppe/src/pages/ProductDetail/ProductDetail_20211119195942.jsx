import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getIdFromNameId } from 'src/utils/helper'

export default function ProductDetail() {
	const [product, setProduct] = useState()
	const dispatch = useDispatch()
	const { idProduct } = useParams()
	useEffect(() => {
		const realId = getIdFromNameId(idProduct)
	}, [idProduct])
	return <div>ProductDetail</div>
}
