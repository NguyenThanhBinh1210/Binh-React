import React from 'react'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import Button from 'src/Components/Button/Button'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<InputText type="email" name="email" placeholder="Email" />
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
