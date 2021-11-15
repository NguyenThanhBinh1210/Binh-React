import React from 'react'
import * as S from './register.style'
export default function Register() {
	return (
		<div>
			<S.StyledRegister>
				<S.Container className="container">
					<S.Banner></S.Banner>
					<S.FormWrapper></S.FormWrapper>
				</S.Container>
			</S.StyledRegister>
		</div>
	)
}
