import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			check: true,
			name: {
				firstName: 'Nguyễn ',
				lastName: 'Thanh Bình'
			},
			age: 20
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
				{this.state.check &&
					({
						/* có thể thay thế div thành React.Fragment */
					},
					(
						<div>
							<div className="title"> Họ và tên</div>
							<div className="desc">
								{' '}
								{this.state.name.firstName} {this.state.name.lastName} {'và'}{' '}
								{this.state.age} {'tuổi'}
							</div>
						</div>
					))}
			</div>
		)
	}
}
