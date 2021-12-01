import React from 'react'
// import Footer from 'src/Components/Footer/Footer'
// import HeaderRegister from 'src/Components/Header/HeaderRegister'

export default function Home() {
	return (
		<div className="home">
			<h1 className="home__title">KINGSHOP </h1>
			<div className="home__filter">
				<div className="home__filter__toggle">
					<i className="bx bx-list-ul"></i>
					<span> Lọc</span>
				</div>
			</div>
			<div className="home__sort">
				<span>Sắp sếp theo</span>
				<section>
					<option disable value="">
						Giá
					</option>
				</section>
			</div>
		</div>
	)
}
