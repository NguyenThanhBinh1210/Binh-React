import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [number, setNumber] = useState('')
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
