import React from 'react'

const InputText = ({ ...props }) => {
	return (
		<div className="form-control">
			<input {...props} type="text" />
		</div>
	)
}

export default InputText
