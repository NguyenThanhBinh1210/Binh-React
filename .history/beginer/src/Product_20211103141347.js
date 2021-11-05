import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: true,
			name: {
				firstName: 'Nguyễn ',
				lastName: 'Thanh Bình'
			}
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
				{this.state.name.firstName}
				{this.state.check && (
					<div>
						<div className="title"> Họ và tên</div>
						<div className="desc">
							{' '}
							{this.state.name.firstName} {this.state.name.lastName}
						</div>
					</div>
				)}
			</div>
		)
	}
}
