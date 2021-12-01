import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
