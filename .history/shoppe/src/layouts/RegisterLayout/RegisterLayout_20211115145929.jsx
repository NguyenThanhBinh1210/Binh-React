import React from 'react'
import Footer from 'src/components/Footer/Footer'
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister'
import PropTypes from 'prop-types'

export default function RegisterLayout({ children, title }) {
	return (
		<div>
			<HeaderRegister title={title} />
			{children}
			<Footer />
		</div>
	)
}