import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import { useForm, Controller } from 'react-hook-form'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import * as S from '../Register/register.style'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { login } from '../auth.slice'

export default function Login() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError
	} = useForm({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = async data => {
		const body = {
			email: data.email,
			password: data.password
		}
		try {
			console.log(body)

			const res = await dispatch(login(body))
			unwrapResult(res)
			navigate(path.home)
		} catch (error) {
			console.log(error)
			if (error.status === 422) {
				for (const key in error.data) {
					setError(key, {
						type: 'server',
						message: error.data[key]
					})
				}
			}
		}
	}

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
