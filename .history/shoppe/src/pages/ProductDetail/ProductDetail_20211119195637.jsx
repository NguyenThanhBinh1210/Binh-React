import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

export default function ProductDetail() {
	const [product, setProduct] = useState()
	const dispatch = useDispatch()
	const {idProduct} = useParams()
	console.log(	const {idProduct} = useParams()
	)
	useEffect(() => {}, [id])
	return <div>ProductDetail</div>
}
