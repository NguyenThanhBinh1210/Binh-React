import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: false
		}
	}
	render() {
		return <div>{this.state.check}</div>
	}
}
