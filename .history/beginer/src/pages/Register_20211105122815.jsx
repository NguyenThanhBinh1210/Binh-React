import React from 'react'
import { get, useForm } from 'react-hook-form'
import '../App.scss'

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValue
	} = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	console.log(errors)

	return (
		<div className="container mt-3">
			<form novValidation onSubmit={handleSubmit(onSubmit)}>
				<div className="form-floating mb-3">
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
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
				</div>
				<div className="form-floating mb-3">
					<input
						type="text"
						id="name"
						name="name"
						className="form-control"
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
				</div>
				<div classNmae="mb-3">
					<div className="form-check">
						<input
							type="radio"
							name="nation"
							className="form-check-input"
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
							className="form-check-input"
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
				</div>
				<div className="mb-3">
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
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
							className="form-check-input"
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
				</div>
				<div className="mb-3">
					<select
						name="sex"
						className="form-select"
						{...register('sex', {
							required: {
								value: true,
								message: 'Phải chọn một '
							}
						})}
					>
						<option value=""> Sex</option>
						<option value="1"> Male</option>
						<option value="2"> Female</option>
						<option value="3"> Other</option>
					</select>
				</div>
				<div className="form-floating mb-3">
					<input
						type="password"
						id="password"
						name="password"
						className="form-control"
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
							}
						})}
					/>
					<label htmlFor="password"> Password </label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className="form-control"
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
								samePassword: value =>
									value === getValue('password') || 'Nhập lại không khớp'
							}
						})}
					/>
					<label htmlFor="confirmPassword"> Confirm Password </label>
				</div>
				<button className="btn btn-primary" type="submit">
					{' '}
					Register
				</button>
			</form>
		</div>
	)
}