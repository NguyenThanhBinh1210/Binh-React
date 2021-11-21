import React from 'react'
import * as S from './productRating.style'

export default function ProductRating() {
	return <S.RatingStarStars>{Array(5).fill(0)}</S.RatingStarStars>
}
