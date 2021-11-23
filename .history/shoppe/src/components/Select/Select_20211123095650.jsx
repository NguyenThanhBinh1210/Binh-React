import React from 'react'
import * as S from './select.style'
import PropTypes from 'prop-types'

export default function Select({
	onChange,
	value = '',
	title = '',
	options = [],
	titleValue = '',
	...props
}) {
	const handleChange = event => {
		const value = event.target.value
		onChange && onChange(value)
	}

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

Select.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
	option: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.oneOfType([PropTypes.string, PropTypes.string])
		})
	)
}
