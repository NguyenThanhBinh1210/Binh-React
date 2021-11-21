import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchIremResult from 'src/components/SearchIremResult/SearchIremResult'
import { getCategories } from './home.slice'
import * as S from './home.style'

export default function Home() {
	const [categories, setCategories] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
			.then(unwrapResult)
			.then(res => {
				setCategories(res.data)
			})
	}, [dispatch])
	useEffect(() => {
		dispatch(getCategories())
			.then(unwrapResult)
			.then(res => {
				setCategories(res.data)
			})
	}, [dispatch])

	return (
		<div>
			<S.Container className="container">
				<S.Side>
					<FilterPanel categories={categories} />
				</S.Side>
				<S.Main>
					<SearchIremResult />
				</S.Main>
			</S.Container>
		</div>
	)
}