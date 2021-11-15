import React, { useState } from 'react'
// import './inputText.style.scss'
import * as S from './InputText.style.js'

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
