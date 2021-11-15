import React from 'react'
import * as S from '../Register/register.style'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { useForm, Controller } from 'react-hook-form'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import { Button } from 'src/assets/styles/utils'
import { Link } from 'react-router-dom'

const {
	control,
	handleSubmit,
	getValues,
	formState: { errors }
} = useForm({
	defaultValues: {
		email: '',
		password: '',
		confirmPassword: ''
	}
})

const handleLogin = async data => {
	console.log(data)
}

export default function Login() {
	return (
		<S.StyledRegister>
			<S.Container className="container">
				<S.Banner></S.Banner>
				<S.FormWrapper>
					<S.FormTitle>Đăng nhập</S.FormTitle>
					<S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
						<S.FormControl>
							<Controller
								name="email"
								control={control}
								rules={rules.email}
								render={({ field }) => (
									<InputText
										type="email"
										name="email"
										placeholder="Email"
										onChange={field.onChange}
										value={getValues('email')}
									/>
								)}
							/>
							<ErrorMessage errors={errors} name="email"></ErrorMessage>
						</S.FormControl>
						<S.FormControl>
							<Controller
								name="password"
								control={control}
								rules={rules.password}
								render={({ field }) => (
									<InputPassword
										name="password"
										placeholder="Mật khẩu"
										onChange={field.onChange}
										value={getValues('password')}
									/>
								)}
							/>
							<ErrorMessage errors={errors} name="password"></ErrorMessage>
						</S.FormControl>
						<S.FormButton>
							<Button type="submit">Đăng nhập</Button>
						</S.FormButton>
					</S.Form>
					<S.FormFooter>
						<span>Bạn chưa có tài khoản?</span>
						<Link to={path.register} className="link">
							Đăng ký
						</Link>
					</S.FormFooter>
				</S.FormWrapper>
			</S.Container>
		</S.StyledRegister>
	)
}
