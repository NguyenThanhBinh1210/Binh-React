import React from 'react'
import { useForm } from 'react-hook-form'
import '../App.scss'

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues
	} = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	const handleClass = (name, baseClass = 'form-control') => {
		return `${baseClass} ${errors[name] ? 'is-invalid' : ''}`
	}

	const ErrorMessage = ({ name }) => {
		if (errors[name]) {
			return <div className="invalid-feedback">{errors[name].message}</div>
		}
		return null
	}

	return (
		<div className="container mt-3">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className="form-floating mb-3">
					<input
						type="email"
						id="email"
						name="email"
						className={handleClass('email')}
						placeholder="name@gmail.com"
						{...register('email', {
							required: {
								value: true,
								message: 'Email phải bắt buộc nhập'
							},
							validate: {
								email: value =>
									/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
										value
									) || 'Email không đúng định dạng'
							}
						})}
					/>
					<label htmlFor="email"> Email address</label>
					<ErrorMessage name="email" />
				</div>
				<div className="form-floating mb-3">
					<input
						type="text"
						id="name"
						name="name"
						className={handleClass('name')}
						placeholder="Maria Ozawa"
						{...register('name', {
							required: {
								value: true,
								message: 'Tên là bắt buộc'
							},
							minLength: {
								value: 2,
								message: 'Tên từ 2 - 56 kí tự'
							},
							maxLength: {
								value: 56,
								message: 'Tên từ 2 - 56 kí tự'
							}
						})}
					/>
					<label htmlFor="name"> Name</label>
					<ErrorMessage name="name" />
				</div>
				<div className="mb-3">
					<div className="form-check">
						<input
							type="radio"
							name="nation"
							className={handleClass('nation', 'form-check-input')}
							id="vietnam"
							{...register('nation', {
								required: {
									value: true,
									message: 'Phải chọn một '
								}
							})}
						/>
						<label htmlFor="nation" className="form-check-label">
							Việt Nam
						</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							name="nation"
							className={handleClass('nation', 'form-check-input')}
							id="theworld"
							{...register('nation', {
								required: {
									value: true,
									message: 'Phải chọn một '
								}
							})}
						/>
						<label htmlFor="nation" className="form-check-label">
							The World
						</label>
					</div>
					<ErrorMessage name="nation" />
				</div>
				<div className="mb-3">
					<div className="form-check">
						<input
							type="checkbox"
							className={handleClass('hobby', 'form-check-input')}
							id="gym"
							name="hobby"
							value="gym"
							{...register('hobby', {
								required: {
									value: true,
									message: 'Phải chọn ít nhất một '
								}
							})}
						/>
						<label htmlFor="gym" className="form-check-label">
							Gym
						</label>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className={handleClass('hobby', 'form-check-input')}
							id="other"
							name="hobby"
							value="other"
							{...register('hobby', {
								required: {
									value: true,
									message: 'Phải chọn ít nhất một '
								}
							})}
						/>
						<label htmlFor="other" className="form-check-label">
							Other
						</label>
					</div>
					<ErrorMessage name="hobby" />
				</div>
				<div className="mb-3">
					<select
						name="sex"
						className={handleClass('sex', 'form-check-select')}
						{...register('sex', {
							required: {
								value: true,
								message: 'Phải chọn giới tính '
							}
						})}
					>
						<option value=""> Sex</option>
						<option value="1"> Male</option>
						<option value="2"> Female</option>
						<option value="3"> Other</option>
					</select>
					<ErrorMessage name="sex" />
				</div>
				<div className="form-floating mb-3">
					<input
						type="password"
						id="password"
						name="password"
						className={handleClass('password')}
						placeholder="abc123"
						{...register('password', {
							required: {
								value: true,
								message: 'Phải nhập mật khẩu '
							},
							minLength: {
								value: 8,
								message: 'Mật khẩu phải từ 8 - 32 kí tự'
							},
							maxLength: {
								value: 32,
								message: 'Mật khẩu phải từ 8 - 32 kí tự'
							},
							validate: {
								uppercasePassword: value =>
									/[A-Z]/.test(value) || 'Phải có ít nhất 1 kí tự in hoa',
								numberPassword: value =>
									/[0-9]/.test(value) || 'Phải có ít nhất 1 chữ số'
							}
						})}
					/>
					<label htmlFor="password"> Password </label>
					<ErrorMessage name="password" />
				</div>
				<div className="form-floating mb-3">
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className={handleClass('confirmPassword')}
						placeholder="abc123"
						{...register('confirmPassword', {
							required: {
								value: true,
								message: 'Chưa nhập lại '
							},
							validate: {
								samePassword: v =>
									v === getValues('password') || 'Nhập lại mật khẩu không khớp'
							}
						})}
					/>
					<label htmlFor="confirmPassword"> Confirm Password </label>
					<ErrorMessage name="confirmPassword" />
				</div>
				<button className="btn btn-primary" type="submit">
					{' '}
					Register
				</button>
			</form>
		</div>
	)
}
