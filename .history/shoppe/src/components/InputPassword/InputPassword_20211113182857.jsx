import React, { useState } from 'react'
import * as S from './inputPassword.style'

export default function InputPassword() {
	const [focus, setFocus] = useState(false)
	return (
		<S.FormControl focus={focus}>
			<input
				{...props}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
		</S.FormControl>
	)
}
