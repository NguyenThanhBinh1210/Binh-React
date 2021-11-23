import React from 'react'
import * as S from './select.style'

export default function Select({
	onChange,
	value = '',
	title = '',
	option = [],
	titleValue = ''
}) {
	return (
		<S.Select>
			<option disabled value={titleValue}></option>
		</S.Select>
	)
}
