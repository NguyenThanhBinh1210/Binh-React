import React from 'react'
import Footer from 'src/components/Footer/Footer'
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister'

export default function RegisterLayout({ children }) {
	return (
		<div>
			<HeaderRegister />
			<Footer />
		</div>
	)
}
