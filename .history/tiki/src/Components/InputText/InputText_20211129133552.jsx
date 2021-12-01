import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [focus, setfocus] = useState(false)
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
