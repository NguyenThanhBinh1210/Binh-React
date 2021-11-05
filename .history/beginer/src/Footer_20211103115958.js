import React, { Component } from 'react'
import PropTypes from 'propTypes'
export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ' this is a footer',
			number: 0
		}
	}
	click = () => {
		this.setState(prevState => ({ number: (prevState.number = 4) }))
	}
	render() {
		console.log(this.props)
		return (
			<footer>
				<button onClick={this.click}> Click {this.state.number}</button>
				{/* {this.props.name}
				{this.state.title} */}
				{this.props.name.lastName}
			</footer>
		)
	}
}

Footer.propTypes = {
	name: PropTypes.object,
	age: PropTypes.number
}
