import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from 'src/assets/styles/utils'
import { useForm, Controller } from 'react-hook-form'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import * as S from './register.style'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
// Em import register nhu the nay nghia la em dang import reducer
// Em export default reducer, con export thuong regsiter
// De y import nhe!
import { register } from '../auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'
// import http from 'src/utils/http'
export default function Register() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: ''
		}
	})

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegister = async data => {
		const body = {
			email: data.email,
			password: data.password
		}
		try {
			console.log(body)

			const res = await dispatch(register(body))
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
		toast.info('Chào mừng đến với shop em ạ !', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored'
		})
	}

	// console.log(errors)

	return (
		<S.StyledRegister>
			<Helmet>
				<title>Đăng ký</title>
			</Helmet>
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
						<S.FormControl>
							<Controller
								name="confirmPassword"
								control={control}
								rules={{
									...rules.confirmPassword,
									validate: {
										samePassword: v =>
											v === getValues('password') || 'Nhập lại không khớp'
									}
								}}
								render={({ field }) => (
									<InputPassword
										name="confirmPassword"
										placeholder="Nhập lại mật khẩu"
										onChange={field.onChange}
										value={getValues('confirmPassword')}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="confirmPassword"
							></ErrorMessage>
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
	)
}
