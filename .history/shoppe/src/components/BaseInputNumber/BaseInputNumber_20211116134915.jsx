import React from 'react'

export default function BaseInputNumber({ onChange, value, ...props }) {
	const handleChange = e => {}
	return <input type="text" onChange={handleChange} value={value} />
}
