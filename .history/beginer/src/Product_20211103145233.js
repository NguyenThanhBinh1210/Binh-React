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
			age: 20,
			products: [
				{
					name: 'Iphone'
				},
				{
					name: 'Oppo'
				},
				{
					name: 'Samsung'
				}
			]
		}
	}

	renderProduct = () => {
		return this.state.products.map((product, index) => (
			<div className="product" key={index}>
				{product.name}
			</div>
		))
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
						/* có thể thay thế div thành React.Fragment nếu không muốn chèn thêm 1 thẻ div bao ngoài, hoặc có thể k truyền gì vào 2 dấu < >  */
						/* khi muốn render ra 1 list ta dùng phương thức map */
					},
					(
						<React.Fragment>
							<div className="title"> Họ và tên</div>
							<div className="desc">
								{' '}
								{this.state.name.firstName}
								{this.state.name.lastName} và {this.state.age} tuổi
							</div>
							{/* có thể gom thành 1 function hoặc ghi thẳng vào,
							 ở dưới đây là gom thành function */}
							{this.renderProduct()}
						</React.Fragment>
					))}
			</div>
		)
	}
}
