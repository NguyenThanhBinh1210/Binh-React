import React, { Component } from 'react'

export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'This is a footer',
			number: 0
		}
		// this.click = this.click.bind(this)
	}

	click = () => {
		this.setState({ number: 1 })
	}

	render() {
		console.log(this.props)
		return (
			<footer>
				{this.props.name}
				<button onClick={this.click}>
					Click
					{this.state.number}
				</button>
			</footer>
		)
	}
}
