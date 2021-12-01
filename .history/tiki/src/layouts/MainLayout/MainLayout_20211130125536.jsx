import React from 'react'
import heroSliderData from 'src/assets/fake-data/hero-slider'
import Footer from 'src/Components/Footer/Footer'
import HeaderSlide from 'src/Components/HeaderSlide/HeaderSlide'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'

const MainLayout = ({ children }) => {
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

export default MainLayout
