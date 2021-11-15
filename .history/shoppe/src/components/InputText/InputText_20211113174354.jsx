import React, { useState } from 'react'
import './inputText.style.scss'

export default function InputText({ ...props }) {
	const [focus, setFocus] = useState(false)
	return (
		<div>
			<input {...props} />
		</div>
	)
}
