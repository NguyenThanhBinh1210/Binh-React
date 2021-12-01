import React from 'react'

const ErrorMessage = ({ errors, name }) => {
	const error = errors[name]
	return <div className="error">

		error && <div className="error-message">{error.message}</div>
	}
	</div>

export default ErrorMessage
