import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className="form-control" focus={focus}>
			<input {...props} />
		</div>
	)
}

export default InputText
