import React from 'react'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import Button from 'src/Components/Button/Button'
import { Link, useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/Components/ErrorMessages/ErrorMessage'

export default function Login() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors }
		// setError
	} = useForm({
		defaultValues: {
			email: '',
			password: ''
			// phoneNumber: ''
		}
	})
	// const dispatch = useDispatch()
	// const history = useHistory()

	const handleLogin = async data => {
		console.log(data)
	}

	return (
		<div className="form-wrapper">
			<form noValidate onSubmit={handleSubmit(handleLogin)}>
				<Controller
					name="email"
					control={control}
					rules={rules.email}
					render={({ field }) => (
						<InputText
							name="email"
							placeholder="Nhập email hoặc số điện thoại"
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
				<Button title="Đăng Nhập" type="submit" />
			</form>
			<div className="link-to">
				<Link to="/">Về trang chủ</Link>
				<Link to="/register">Đăng ký</Link>
				<Link to="/forgot">Quên mật khâu</Link>
			</div>
		</div>
	)
}
