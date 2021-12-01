import React from 'react'

const ModalSearch = () => {
	return (
		<div className="search-modal active">
			<div className="search-modal__content">
				<div className="input-search">
					<i className="bx bx-search"></i>
					<input placeholder="Tìm kiếm..." />
					<i className="bx bx-x"></i>
				</div>
			</div>
		</div>
	)
}

export default ModalSearch
