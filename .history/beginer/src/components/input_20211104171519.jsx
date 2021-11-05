import React from 'react'
import PropTypes from 'props-types'

export default function Input({
	type = 'text',
	onChange,
	value,
	...props
}) {
	const handleChange = event => {
		const value = event.target.value
		if (type === 'number') {
			if (/^\d+$/.text(value) || value === '') {
				onChange(value)
			}
		} else {
			onChange(value)
		}
	}

	return (
		<input
			type={type === 'number' ? 'text' : type}
			value={value}
			onChange={handleChange}
			{...props}
		/>
	)
}

Input.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string
}
