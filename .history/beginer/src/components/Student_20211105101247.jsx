import React from 'react'
import PropTypes from 'prop-types'

export default function Student({ student }) {
	return (
		<li className="list-group-item" key={student.id}>
			<span className="me-3">
				{student.name}: {student.age} tuổi
			</span>
			<div className="btn-group">
				<button type="button" className="btn btn-info me-3">
					Sửa
				</button>
				<button type="button" className="btn btn-danger" onClick={handleDelete}>
					Xóa
				</button>
			</div>
		</li>
	)
}

Student.propTypes = {
	student: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired
}
