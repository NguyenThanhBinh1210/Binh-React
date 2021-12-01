import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [focus, setfocus] = useState(fale)
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
