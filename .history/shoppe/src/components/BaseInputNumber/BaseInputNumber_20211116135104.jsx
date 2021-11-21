import React from 'react'

export default function BaseInputNumber({ onChange, value, ...props }) {
	const handleChange = e => {
		const value = e.target.value
		if ((/^\d+$/.test(value) || value === '') && onChange) {
			onChange(val)
		}
	}
	return <input type="text" onChange={handleChange} value={value} />
}
