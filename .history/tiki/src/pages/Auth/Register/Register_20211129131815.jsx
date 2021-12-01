import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/Components/Button/Button'

const Register = () => {
	return (
		<div className="form-wrapper">
			<form noValidate>
				<div className="form-control">
					<input type="text" placeholder="Nhập" />
				</div>
				<div className="form-control">
					<input type="text" placeholder="Nhập" />
				</div>
				<Button title="Đăng ký" type="submit" />
			</form>
			<div class="link-to">
				<Link to="/"></Link>
			</div>
		</div>
	)
}

export default Register
