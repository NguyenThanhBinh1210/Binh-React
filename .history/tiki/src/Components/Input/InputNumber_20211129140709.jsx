import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [number, setNumber] = useState('')
	const handleChange = e => {
		const value = e.target.value
		if (/\d+/g) {
			setNumber(value)
		}
	}
	return (
		<div className="form-control">
			<input {...props} onChange={handleChange} />
		</div>
	)
}

export default InputText
