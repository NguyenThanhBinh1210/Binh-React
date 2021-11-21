import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchIremResult from 'src/components/SearchIremResult/SearchIremResult'
import useQuery from 'src/hooks/useQuery'
import { getCategories, getProducts } from './home.slice'
import * as S from './home.style'

export default function Home() {
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState({})
	const [filters, setFilters] = useState({})
	const dispatch = useDispatch()
	const query = useQuery()

	useEffect(() => {
		dispatch(getCategories())
			.then(unwrapResult)
			.then(res => {
				setCategories(res.data)
			})
	}, [dispatch])
	useEffect(() => {
		const _getProducts = async () => {
			const data = await dispatch(getProducts())
			const res = unwrapResult(data)
			setProducts(res.data)
		}
		_getProducts()
	}, [query, dispatch])

	return (
		<div>
			<S.Container className="container">
				<S.Side>
					<FilterPanel categories={categories} />
				</S.Side>
				<S.Main>
					<SearchIremResult products={products} />
				</S.Main>
			</S.Container>
		</div>
	)
}
