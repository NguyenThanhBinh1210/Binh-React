import React from 'react'
// import { Link } from 'react-router-dom'
import Button from 'src/Components/Button/Button'
import InputText from 'src/Components/Input/InputText'

const Register = () => {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<InputText type="text" name="name" placeholder="Họ và tên" />
				<InputText type="email" name="email" placeholder="Email" />
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
