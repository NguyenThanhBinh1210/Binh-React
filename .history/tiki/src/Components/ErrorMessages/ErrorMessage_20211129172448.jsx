import React from 'react'

const ErrorMessage = ({ errors, name }) => {
	const error = errors[name]
	return error && <div className="error-message">{error.message}</div>
}

export default ErrorMessage
