import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = props => {
	return <div className="product-card"></div>
}

ProductCard.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired
}

export default ProductCard
