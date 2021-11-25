import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = props => {
	return (
		<div className="product-card">
			<Link>
				<div className="product-card__image">
					<img src={props.img1} alt={props.name} />
					<img src={props.img2} alt={props.name} />
				</div>
			</Link>
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
