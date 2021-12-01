import React from 'react'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import Button from 'src/Components/Button/Button'

export default function Login() {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<InputText type="email" name="email" placeholder="Email" />
				<InputPassword type="password" name="password" placeholder="Mật khẩu" />
				<Button title="Đăng Nhập" type="submit" />
			</form>
			{/* <div class="link-to">
		<Link to="/">Về trang chủ</Link>
		<Link to="/">Về trang chủ</Link>
		<Link to="/">Về trang chủ</Link>
	</div> */}
		</div>
	)
}
