import React from 'react'

const ErrorMessage = ({ errors, name }) => {
	const error = errors[name]
	return <div className="error-message"></div>
}

export default ErrorMessage
