import React from 'react'
import * as S from './searchIremResult.style'

export default function SearchIremResult() {
	return (
		<div>
			<S.SortBar>
				<S.SortBarLabel>Sắp xếp theo</S.SortBarLabel>
				<S.SortByOptions>
					<S.SortByOptionsOption className="active">
						Phổ biến
					</S.SortByOptionsOption>
					<S.SortByOptionsOption className="active">
						Mới nhất
					</S.SortByOptionsOption>
					<S.SortByOptionsOption className="active">
						Bán chạy
					</S.SortByOptionsOption>
				</S.SortByOptions>
			</S.SortBar>
		</div>
	)
}
