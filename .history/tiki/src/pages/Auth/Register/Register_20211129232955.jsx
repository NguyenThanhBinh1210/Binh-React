import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from 'src/Components/Button/Button'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/Components/ErrorMessages/ErrorMessage'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'

const Register = () => {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors }
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			phoneNumber: ''
		}
	})
	const dispatch = useDispatch()
	const history = useHistory()

	const handleRegister = async data => {
		// lấy dữ liệu từ register lhi bấm đăng kí
		const body = {
			email: data.email,
			password: data.password,
			phoneNumber: data.phoneNumber,
			fullName: data.fullName
		}
		try {
			const res = await dispatch(register(body))(unwrapResult)
		} catch (err) {}
	}

	return (
		<div className="form-wrapper">
			<form noValidate onSubmit={handleSubmit(handleRegister)}>
				<Controller
					name="fullName"
					control={control}
					rules={rules.fullName}
					render={({ field }) => (
						<InputText
							name="fullName"
							placeholder="Họ và tên"
							onChange={field.onChange}
							value={getValues('fullName')}
						/>
					)}
				/>
				<ErrorMessage errors={errors} name="fullName" />
				<Controller
					name="email"
					control={control}
					rules={rules.email}
					render={({ field }) => (
						<InputText
							name="email"
							placeholder="Email"
							onChange={field.onChange}
							value={getValues('email')}
						/>
					)}
				/>
				<ErrorMessage errors={errors} name="email" />
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
				<ErrorMessage errors={errors} name="password" />
				<Controller
					name="phoneNumber"
					control={control}
					rules={rules.phoneNumber}
					render={({ field }) => (
						<InputText
							name="phoneNumber"
							placeholder="Số điện thoại"
							onChange={field.onChange}
							value={getValues('phoneNumber')}
						/>
					)}
				/>
				<ErrorMessage errors={errors} name="phoneNumber" />
				<Button title="Đăng ký" type="submit" />
			</form>
		</div>
	)
}

export default Register
