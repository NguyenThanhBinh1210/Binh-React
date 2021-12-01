import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderUser from 'src/Components/HeaderUser/HeaderUser'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'

const UserLayout = ({ children }) => {
	return (
		<div style={{ display: 'flex' }}>
			<LeftMenu />
			<div>
				<HeaderUser />
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default UserLayout
