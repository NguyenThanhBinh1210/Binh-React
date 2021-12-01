import React from 'react'

export default function Login() {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<InputText type="text" name="name" placeholder="Họ và tên" />
				<InputText type="email" name="email" placeholder="Email" />
				<InputPassword type="password" name="password" placeholder="Mật khẩu" />
				<InputNumber type="text" name="number" placeholder="Số điện thoại" />
				<Button title="Đăng ký" type="submit" />
			</form>
			{/* <div class="link-to">
		<Link to="/">Về trang chủ</Link>
		<Link to="/">Về trang chủ</Link>
		<Link to="/">Về trang chủ</Link>
	</div> */}
		</div>
	)
}
