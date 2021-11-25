import React from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import PolicyCard from '../components/PolicyCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'

const Home = () => {
	return (
		<Helmet title="Trang chủ">
			<HeroSlider
				data={heroSliderData}
				control={true}
				auto={true}
				timeOut={5000}
			/>
			<Section>
				<SectionBody>
					{policy.map((item, index) => (
						<PolicyCard
							key={index}
							value={item}
							name={item.name}
							description={item.description}
							icon={item.icon}
						/>
					))}
				</SectionBody>
			</Section>
		</Helmet>
	)
}

export default Home
