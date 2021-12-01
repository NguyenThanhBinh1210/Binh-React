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
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			phoneNumber: ''
		}
	})

	const handleRegister = data => {
		console.log(data)
	}

	console.log(errors)

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
				<Controller
					name="phoneNumber"
					control={control}
					rules={rules.phoneNumber}
					render={({ field }) => (
						<InputNumber
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
