import React, { useState } from 'react'
import './inputText.style.scss'

export default function InputText({ ...props }) {
	const [focus, setFocus] = useState(false)
	return (
		<div focus={focus}>
			<input
				{...props}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
		</div>
	)
}
