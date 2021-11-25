import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const ProductCard = props => {
	return (
		<div className="product-card">
			<Link>
				<div className="product-card__image">
					<img src={props.img1} alt={props.name} />
					<img src={props.img2} alt={props.name} />
				</div>
				<h3 className="product-card__name">{props.name}</h3>
				<div className="product-card__price">
					{props.price}
					<span className="product-card__price__old">
						<del>399000</del>
					</span>
				</div>
			</Link>
			<div className="product-card__btn">
				<Button size="sm" icon="bx bx-cart" animate={true}></Button>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired
}

export default ProductCard
