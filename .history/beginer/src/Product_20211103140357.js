import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: false,
			name: 'product'
		}
	}
	render() {
		return (
			<div>
				{this.state.check}
				{this.state.name}
			</div>
		)
	}
}
