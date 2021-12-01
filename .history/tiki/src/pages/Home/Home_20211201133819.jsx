import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/Components/Button/Button'
import Grid from 'src/Components/Grid/Grid'
import ProductItem from 'src/Components/ProductItem/ProductItem'
import { path } from 'src/constants/path'

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
			<Grid col={4} mdCol={2} smCol={1} gap={20}>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</Grid>
			<div className="filter-menu" ref={search}>
				<i className="bx bx-x filter-menu__close" onClick={searchToggle}></i>
				<div className="filter-menu__content">
					<div className="filter-menu__content__category__title-link">
						<Link to={path.home}>Tất cả danh mục</Link>
					</div>
					<div className="filter-menu__content__category__list">
						<div className="filter-menu__content__category__item">
							<Link to="">Quần áo</Link>
						</div>
						<div className="filter-menu__content__category__item">
							<Link to="">Quần áo</Link>
						</div>
						<div className="filter-menu__content__category__item">
							<Link to="">Quần áo</Link>
						</div>
					</div>
					<div className="filter-menu__content__category__title">
						Bộ lọc tìm kiếm
					</div>
					<div className="filter-menu__content__category__group">
						<div className="filter-menu__content__category__group__header">
							Khoản giá
						</div>
						<div className="filter-menu__content__category__group__price-range">
							<input
								className="filter-menu__content__category__group__price-input"
								placeholder="Từ"
							/>
							<div className="filter-menu__content__category__group__price-line"></div>
							<input
								className="filter-menu__content__category__group__price-input"
								placeholder="Đến"
							/>
						</div>
						<div className="filter-menu__content__category__group__message">
							Vui lòng điền khoảng giá phù hợp
						</div>
						<Button title="Áp dụng"></Button>
					</div>
				</div>
			</div>
		</div>
	)
}
