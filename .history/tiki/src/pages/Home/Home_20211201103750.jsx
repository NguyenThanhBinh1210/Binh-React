import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	const search = useRef(null)
	const searchToggle = () => search.current.classList.toggle('active')
	return (
		<div className="home">
			<h1 className="home__title">KINGSHOP </h1>
			<div className="home__main">
				<div className="home__filter">
					<div className="home__filter__toggle">
						<i className="bx bx-list-ul" onClick={searchToggle}></i>
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
			<div className="filter-menu" ref={search}>
				<div className="filter-menu__content">
					<div className="filter-menu__content__category-title-link">
						<Link>Tất cả danh mục</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
