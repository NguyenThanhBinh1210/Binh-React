import React from 'react'
import { useForm } from 'react-hook-form'
import '../App.scss'

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValue
	} = useForm()
	return (
		<div className="container mt-3">
			<form novValidation>
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
						/>
						<label htmlFor="other" className="form-check-label">
							Other
						</label>
					</div>
				</div>
				<div className="mb-3">
					<select name="sex" className="form-select">
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
