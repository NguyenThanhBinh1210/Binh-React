import React from 'react'
import Helmet from '../components/Helmet'

const Home = () => {
	return (
		<Helmet title="Trang chủ">
			{/* Hero slider */}
			<HeroSlider />
		</Helmet>
	)
}

export default Home
