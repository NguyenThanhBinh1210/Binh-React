import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [number, setNumber] = useState('')
	const handleChange = e => {
		const value = e.target.value
		if (/^\d+$/.test(value) || value === '') {
			setNumber(value)
			// console.log(value)
		}
	}
	return (
		<div className="form-control">
			<input {...props} type="text" onChange={handleChange} value={number} />
		</div>
	)
}

export default InputText
