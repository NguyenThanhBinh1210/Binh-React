import React from 'react'
import * as S from './checkbox.style'

export default function Checkbox({ onChange, checked, ...props }) {
	return (
		<S.Checkbox>
			<S.CheckboxInput
				type="checkbox"
				onChange={handleChange}
				checked={checked}
				{...props}
			/>
			<S.CheckboxBox />
		</S.Checkbox>
	)
}
