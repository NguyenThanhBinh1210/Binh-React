import React from 'react'

export default function Register() {
	return (
		<div className="container">
			<form novValidation>
				<div className="form-floating mb-3">
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
						placeholder="name@gmail.com"
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
					</div>
				</div>
			</form>
		</div>
	)
}
