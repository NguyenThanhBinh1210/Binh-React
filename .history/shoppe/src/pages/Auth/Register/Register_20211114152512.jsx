import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import { useForm, Controller } from 'react-hook-form'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import * as S from './register.style'
import { rules } from 'src/constants/rules'
export default function Register() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors }
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmedPassword: ''
		}
	})

	const handleRegister = data => {
		console.log(data)
	}

	console.log(errors)

	return (
		<div>
			<S.StyledRegister>
				<S.Container className="container">
					<S.Banner></S.Banner>
					<S.FormWrapper>
						<S.FormTitle>Đăng ký</S.FormTitle>
						<S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
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
							</S.FormControl>
							<S.FormControl>
								<Controller
									name="confirmedPassword"
									control={control}
									rules={{
										...rules.confirmedPassword,
										validate: {
											samePassword: v =>
												v === getValues('password') || 'Mật khẩu không khớp'
										}
									}}
									render={({ field }) => (
										<InputPassword
											placeholder="Nhập lại mật khẩu"
											name="confirmedPassword"
											onChange={field.onChange}
											value={getValues('confirmedPassword')}
										/>
									)}
								/>
								<ErrorMessage errors={errors} name="confirmedPassword" />
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
