import React from 'react'
import * as S from './ratingStar.style'

export default function RatingStar() {
	return (
		<div>
			{Array(5)
				.fill(0)
				.map((item, index) => (
					<S.RatingStarContainer key={index}>
						{Array(5)
							.fill(0)
							.map((star, indexStar) => {
								if (indexStar < 5 - index) {
									return 1
								}
								return 0
							})}
					</S.RatingStarContainer>
				))}
		</div>
	)
}
