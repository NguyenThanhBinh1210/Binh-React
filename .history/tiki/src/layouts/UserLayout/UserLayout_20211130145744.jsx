import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderSlide from 'src/Components/HeaderSlide/HeaderSlide'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'

const UserLayout = ({ children }) => {
	return (
		<div style={{ display: 'flex' }}>
			<LeftMenu />
			<div>
				<HeaderSlide />
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default UserLayout
