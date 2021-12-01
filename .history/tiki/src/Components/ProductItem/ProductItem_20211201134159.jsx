import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = () => {
	return (
		<div>
			<Link to="">
				<div className="product__image">
					<img
						src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021101152_1000_x_1500__Dai_dien.jpg"
						alt=""
					/>
					<div className="product__image__list">
						<img
							src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021101152_1000_x_1500__Dai_dien.jpg"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021101152_1000_x_1500__Dai_dien.jpg"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021101152_1000_x_1500__Dai_dien.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="product__price">265.000 đ</div>
			</Link>
		</div>
	)
}

export default ProductItem
