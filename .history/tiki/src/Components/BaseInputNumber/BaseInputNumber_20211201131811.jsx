import React from 'react'

export default function BaseInputNumber({ onChange, value, ...props }) {
	const handleChange = e => {
		const value = e.target.value
		if (/^\d+$/.test(value)) {
		}
	}
	return <input type="text" onChange={handleChange} value={value} {...props} />
}
