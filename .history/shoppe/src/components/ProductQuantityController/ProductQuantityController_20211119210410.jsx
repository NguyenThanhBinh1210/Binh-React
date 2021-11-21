import React from 'react'
import * as S from './productQuantityController.style'

export default function ProductQuantityController() {
	return (
		<S.ProductQuantityController>
			<S.ProductQuantityButton>
				<svg
					enable-background="new 0 0 10 10"
					viewBox="0 0 10 10"
					x="0"
					y="0"
					class="shopee-svg-icon "
				>
					<polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
				</svg>
			</S.ProductQuantityButton>
		</S.ProductQuantityController>
	)
}
