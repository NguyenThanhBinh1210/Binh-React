import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from 'src/Components/Button/Button'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import InputNumber from 'src/Components/Input/InputNumber'
import { rules } from 'src/constants/rules'

const Register = () => {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors }
	} = useForm({
		defaultValue: {
			name: '',
			email: '',
			password: '',
			phoneNumber: ''
		}
	})

	const handleRegister = data => {
		console.log(data)
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
							type="text"
							name="fullName"
							placeholder="Họ và tên"
							onChange={field.onChange}
							value={getValues('fullName')}
						/>
					)}
				/>
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
				<Controller
					name="password"
					control={control}
					rules={rules.password}
					render={({ field }) => (
						<InputPassword
							type="password"
							name="password"
							placeholder="Mật khẩu"
							onChange={field.onChange}
							value={getValues('password')}
						/>
					)}
				/>
				<Controller
					name="phoneNumber"
					control={control}
					rules={rules.phoneNumber}
					render={({ field }) => (
						<InputNumber
							type="text"
							name="phoneNumber"
							placeholder="Số điện thoại"
							onChange={field.onChange}
							value={getValues('phoneNumber')}
						/>
					)}
				/>
				<Button title="Đăng ký" type="submit" />
			</form>
		</div>
	)
}

export default Register
