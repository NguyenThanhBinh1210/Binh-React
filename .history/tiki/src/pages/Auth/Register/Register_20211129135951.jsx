import React from 'react'
// import { Link } from 'react-router-dom'
import Button from 'src/Components/Button/Button'
import InputText from 'src/Components/Input/InputText'
import InputPassword from 'src/Components/Input/InputPassword'
import InputNumber from 'src/Components/Input/InputNumber'

const Register = () => {
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

export default Register