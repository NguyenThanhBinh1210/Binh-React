import React, { Component } from 'react'
export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ' this is a footer',
			number: 0
		}
	}
	render() {
		return <footer>{this.state.title}</footer>
	}
}
