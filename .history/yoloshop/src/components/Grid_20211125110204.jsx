import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
	const style = {
		gap: props.gap ? `${props.gap}px` : '0'
	}
	const col = `grid-col-${props.col}`
	const mdCol = `grid-col-${props.mdCol}`
	const smCol = `grid-col-${props.smCol}`
	return <div></div>
}

Grid.propTypes = {
	col: PropTypes.number.isRequired,
	mdCol: PropTypes.number,
	smCol: PropTypes.number,
	gap: PropTypes.number
}

export default Grid
