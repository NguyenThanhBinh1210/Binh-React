import React from 'react'

export default function BaseInputNumber({ onChange, value, ...props }) {
	return <input type="text" onChange={handleChange} value={value} />
}
