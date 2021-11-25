import React from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import PolicyCard from '../components/PolicyCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'

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
					<Grid col={4} mdCol={2} smCol={1}>
						{policy.map((item, index) => (
							<Link to="/policy">
								<PolicyCard
									key={index}
									name={item.name}
									description={item.description}
									icon={item.icon}
								/>
							</Link>
						))}
					</Grid>
				</SectionBody>
			</Section>
			<Section>
				<SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1}>
						{productData.getProducts(4).map((item, index) => (
							<ProductCard key={index} img1={item.img1} img2={item.img2} />
						))}
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
	)
}

export default Home
