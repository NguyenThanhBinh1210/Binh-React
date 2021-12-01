import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className="form-control" focus={focus} onFocus={() => setFocus(true)}>
			<input {...props} />
		</div>
	)
}

export default InputText
