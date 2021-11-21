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
					<S.SortByOptionsOption>Mới nhất</S.SortByOptionsOption>
					<S.SortByOptionsOption>Bán chạy</S.SortByOptionsOption>
					<S.SortByPrice>
						<option disable value="">
							Giá
						</option>
						<option value="price:asc">Giá thấp đến cao</option>
						<option value="price:desc">Giá cao đến thâps</option>
					</S.SortByPrice>
				</S.SortByOptions>
				<S.MiniPageController>
					<S.MiniPageControllerState>
						<S.MiniPageControllerCurrentState>
							1
						</S.MiniPageControllerCurrentState>
						/
						<S.MiniPageControllerCurrentState>
							2
						</S.MiniPageControllerCurrentState>
					</S.MiniPageControllerState>
				</S.MiniPageController>
			</S.SortBar>
		</div>
	)
}
