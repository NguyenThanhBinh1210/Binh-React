import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInputNumber({ onChange, value, onBlur, ...props }) {
	const handleChange = e => {
		const value = e.target.value
		if ((/^\d+$/.test(value) || value === '') && onChange) {
			onChange(value)
		}
	}
	return <input type="text" onChange={handleChange} value={value} {...props} />
}

BaseInputNumber.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
