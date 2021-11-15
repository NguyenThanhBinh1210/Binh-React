import React from 'react'
import { Button } from 'src/assets/styles/utils'
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
								<Button type="submit">Đăng kí</Button>
							</S.FormButton>
						</S.Form>
					</S.FormWrapper>
				</S.Container>
			</S.StyledRegister>
		</div>
	)
}
