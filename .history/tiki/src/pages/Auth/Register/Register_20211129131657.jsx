import React from 'react'
import Button from 'src/Components/Button/Button'

const Register = () => {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<div className="form-control">
					<input type="text" placeholder="Nhập" />
				</div>
				<input type="text" placeholder="Nhập" />
				<Button title="Đăng ký" type="submit" />
			</form>
		</div>
	)
}

export default Register
