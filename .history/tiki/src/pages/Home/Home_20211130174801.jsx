import React from 'react'
// import Footer from 'src/Components/Footer/Footer'
// import HeaderRegister from 'src/Components/Header/HeaderRegister'

export default function Home() {
	return (
		<div className="home">
			<div className="home__filter__menu"></div>
			<h1 className="home__title">KINGSHOP </h1>
			<div className="home__main">
				<div className="home__filter">
					<div className="home__filter__toggle">
						<i className="bx bx-list-ul"></i>
						<span> Lọc</span>
					</div>
				</div>
				<div className="home__sort">
					<span>Sắp sếp theo</span>
					<select>
						<option disable value="">
							Mặc định
						</option>
						<option value="price:desc">Giá: Giảm dần</option>
						<option value="price:asc">Giá: Tăng dần</option>
						<option>Phổ biến</option>
						<option>Mới nhất</option>
						<option>Bán chạy</option>
					</select>
				</div>
			</div>
		</div>
	)
}
