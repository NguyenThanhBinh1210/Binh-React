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
		return (
			<footer>
				<button onClick={()=> this.setState({number + 1})}> Click {this.state.number}</button>
				{this.state.title}
			</footer>
		)
	}
}
