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
					/>
				</div>
			</form>
		</div>
	)
}
