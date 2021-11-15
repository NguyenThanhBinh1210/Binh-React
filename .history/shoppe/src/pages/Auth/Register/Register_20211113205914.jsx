import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import * as S from './register.style'
export default function Register() {
	return (
		<div>
			<S.StyledRegister>
				<S.Container className="container">
					<S.Banner>
						<img src=""https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba")">
					</S.Banner>
					<S.FormWrapper>
						<S.FormTitle>Đăng ký</S.FormTitle>
						<S.Form novalidate>
							<S.FormControl>
								<InputText type="email" name="email" placeholder="Email" />
							</S.FormControl>
							<S.FormControl>
								<InputPassword placeholder="Mật khẩu" name="password" />
							</S.FormControl>
							<S.FormControl>
								<InputPassword
									placeholder="Nhập lại mật khẩu"
									name="confirmPassword"
								/>
							</S.FormControl>
							<S.FormButton>
								<Button type="submit">Đăng ký</Button>
							</S.FormButton>
						</S.Form>
						<S.FormFooter>
							<span>Bạn đã có tài khoản?</span>
							<Link to={path.login} className="link">
								Đăng nhập
							</Link>
						</S.FormFooter>
					</S.FormWrapper>
				</S.Container>
			</S.StyledRegister>
		</div>
	)
}