import React, { useState } from 'react'
import * as S from './inputPassword.style'

export default function InputPassword({ ...props }) {
	const [focus, setFocus] = useState(false)
	const [visiblePasswords, setVisiblePasswords] = useState(false)
	const toggleVisiblePassword = () => {
		setVisiblePasswords(visiblePasswords => !visiblePasswords)
	}
	return (
		<S.FormControl focus={focus}>
			<input
				{...props}
				type={visiblePasswords ? 'text' : 'password'}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<button
				onClick={toggleVisiblePassword}
				type="button"
				tabIndex="-1"
			></button>
		</S.FormControl>
	)
}
