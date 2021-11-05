import React from 'react'

export default function Input({ type, onChange, value, ...props }) {
	return (
		<input
			type={type === 'number' ? 'text' : type}
			value={value}
			onChange={handleChange}
		/>
	)
}
