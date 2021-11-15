import React, { useState } from 'react'
import './inputText.style.scss'

export default function InputText({ ...props }) {
	const [focus, setFocus] = useState(false)
	return (
		<div focus={focus} className="input-control">
			<input
				{...props}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
		</div>
	)
}
