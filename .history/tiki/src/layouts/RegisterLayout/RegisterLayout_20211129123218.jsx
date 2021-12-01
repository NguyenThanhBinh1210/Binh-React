import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderRegister from 'src/Components/Header/HeaderRegister'

const RegisterLayout = ({ children, title }) => {
	return (
		<div>
			<HeaderRegister />
			{children}
			<Footer />
		</div>
	)
}

export default RegisterLayout
