import React from 'react'
import Checkbox from 'src/components/Checkbox/Checkbox'
import * as S from './cart.style.js'

export default function Cart() {
	return (
		<div className="container">
			<div>
				<S.ProductHeader>
					<S.ProductHeaderCheckbox>
						<Checkbox />
					</S.ProductHeaderCheckbox>
				</S.ProductHeader>
			</div>
		</div>
	)
}
