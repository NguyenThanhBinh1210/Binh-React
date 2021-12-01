import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [number, setNumber] = useState('')
	const handleChange = e => {
		const value = e.target.value
	}
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
