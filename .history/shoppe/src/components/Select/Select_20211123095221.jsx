import React from 'react'
import * as S from './select.style'

export default function Select({
	onChange,
	value = '',
	title = '',
	options = [],
	titleValue = ''
}) {
	return (
		<S.Select onChange={handleChange} value={value} {...props}>
			<option disabled value={titleValue}></option>
			{options.map(({ name, value }, index) => {
				;<option value={value} key={index}>
					{name}
				</option>
			})}
		</S.Select>
	)
}
