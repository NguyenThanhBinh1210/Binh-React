import React, { useState } from 'react'

const InputText = ({ ...props }) => {
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
