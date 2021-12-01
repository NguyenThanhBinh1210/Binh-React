import React from 'react'

const ErrorMessage = ({ errors, name }) => {
	const error = errors[name]
	return <div className="error"></div>
	error && <div className="error-message">{error.message}</div>
}

export default ErrorMessage
