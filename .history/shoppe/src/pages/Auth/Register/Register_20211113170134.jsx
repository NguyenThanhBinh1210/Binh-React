import React from 'react'
import * as S from './register.style'
export default function Register() {
	return (
		<div>
			<S.StyledRegister>
				<S.Container className="container">
					<S.Banner></S.Banner>
					<S.FormWrapper>
						<S.FormTitle>Đăng kí</S.FormTitle>
						<S.Form novalidate>
							<S.FormControl></S.FormControl>
							<S.FormControl></S.FormControl>
							<S.FormControl></S.FormControl>
							<S.FormButton>
								<Button></Button>
							</S.FormButton>
						</S.Form>
					</S.FormWrapper>
				</S.Container>
			</S.StyledRegister>
		</div>
	)
}
