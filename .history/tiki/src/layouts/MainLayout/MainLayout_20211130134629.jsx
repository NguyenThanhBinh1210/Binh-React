import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderSlide from 'src/Components/HeaderSlide/HeaderSlide'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'
// import Modal from 'src/Components/Modal/Modal'

const MainLayout = ({ children }) => {
	return (
		<div style={{ display: 'flex' }}>
			<LeftMenu />
			<div>
				<HeaderSlide />
				{children}
				<Footer />
				<div
					style={{ backgroundColor: 'red', width: '100px', height: '100px' }}
				></div>
			</div>
		</div>
	)
}

export default MainLayout
