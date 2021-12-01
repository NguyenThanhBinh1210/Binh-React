import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderSlide from 'src/Components/HeaderSlide/HeaderSlide'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'

const MainLayout = ({ children }) => {
	return (
		<div style={{ display: 'flex' }}>
			<LeftMenu />
			<div>
				<HeaderSlide
					data={heroSliderData}
					control={true}
					auto={true}
					timeOut={5000}
				/>
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
