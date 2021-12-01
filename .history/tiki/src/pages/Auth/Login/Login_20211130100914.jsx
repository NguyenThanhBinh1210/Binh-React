import React from 'react'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import Button from 'src/Components/Button/Button'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export default function Login() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError
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

	const handleRegister = async data => {}

	return (
		<div className="form-wrapper">
			<form noValidate>
				<InputText
					type="email"
					name="email"
					placeholder="Nhập email hoặc số điện thoại"
				/>
				<InputPassword type="password" name="password" placeholder="Mật khẩu" />
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
