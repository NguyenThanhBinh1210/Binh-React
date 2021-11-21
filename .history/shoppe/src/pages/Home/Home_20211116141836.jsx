import React from 'react'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchIremResult from 'src/components/SearchIremResult/SearchIremResult'
import * as S from './home.style'

export default function Home() {
	return (
		<div>
			<S.Container className="container">
				<S.Side>
					<FilterPanel />
				</S.Side>
				<S.Main>
					<SearchIremResult />
				</S.Main>
			</S.Container>
		</div>
	)
}
