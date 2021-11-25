import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
	const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'
	const size = props.size ? 'btn-' + props.size : ''
	return <div></div>
}

Button.propTypes = {
	backgroundColor: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	animate: PropTypes.bool,
	onclick: PropTypes.func
}

export default Button
