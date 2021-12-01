import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderRegister from 'src/Components/Header/HeaderRegister'
import PropTypes from 'prop-types'

const RegisterLayout = ({ children, title }) => {
	return (
		<div>
			<HeaderRegister title={title} />
			{children}
			<Footer />
		</div>
	)
}

export default RegisterLayout

RegisterLayout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
}
