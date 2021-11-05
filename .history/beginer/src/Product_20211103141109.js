import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: false,
			name: 'binhdeptrai'
		}
	}
	render() {
		return (
			<div>
				{this.state.check ? (
					<div className="ok"> ok</div>
				) : (
					<div className="not">not</div>
				)}
				{this.state.name}
				{this.state.check && (
					<div>
						<div className="title"> Họ và tên</div>
						<div className="desc"> {this.state.name}</div>
					</div>
				)}
			</div>
		)
	}
}
