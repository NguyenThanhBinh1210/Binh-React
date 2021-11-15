import React from 'react'
import './inputText.style.scss'

export default function InputText({ ...props }) {
	return (
		<div>
			<input {...props} />
		</div>
	)
}