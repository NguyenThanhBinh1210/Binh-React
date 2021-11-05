import React from 'react'

export default function Input({ type, onChange, value, ...props }) {
	const handleChange = event => {
		const value = event.target.value
	}

	return (
		<input
			type={type === 'number' ? 'text' : type}
			value={value}
			onChange={handleChange}
		/>
	)
}
