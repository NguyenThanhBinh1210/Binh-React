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
	const [products, setProducts] = useState({
		product: [],
		pagination: {}
	})
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
		const _filters = {
			...query,
			page: query.page || 1,
			limit: query.limit || 10,
			sortBy: query.sortBy || 'view'
		}
		setFilters(_filters)
		const params = {
			page: _filters.page,
			limit: _filters.limit,
			category: _filters.category,
			exclude: _filters.exclude,
			rating_filter: _filters.rating,
			price_max: _filters.maxPrice,
			price_min: _filters.minPrice,
			sort_by: _filters.sortBy,
			order: _filters.order
		}
		const _getProducts = async () => {
			const data = await dispatch(getProducts({ params }))
			const res = unwrapResult(data)
			setProducts(res.data)
		}
		_getProducts()
	}, [query, dispatch])

	return (
		<div>
			<S.Container className="container">
				<S.Side>
					<FilterPanel categories={categories} filters={filters} />
				</S.Side>
				<S.Main>
					<SearchIremResult products={products} filters={filters} />
				</S.Main>
			</S.Container>
		</div>
	)
}
