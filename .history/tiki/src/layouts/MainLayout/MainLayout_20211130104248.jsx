import React from 'react'
import Footer from 'src/Components/Footer/Footer'
import HeaderSlide from 'src/Components/HeaderSlide/HeaderSlide'
import LeftMenu from 'src/Components/LeftMenu/LeftMenu'

const MainLayout = ({ children }) => {
	return (
		<div style={{ display: 'flex' }}>
			<leftmenu>
				<div>
					<headerslide>
						{'{'}children{'}'}
						<footer></footer>
					</headerslide>
				</div>
			</leftmenu>
		</div>
	)
}

export default MainLayout
