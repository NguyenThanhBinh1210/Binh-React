import React from 'react'

export default function StudentManagement() {
	return (
		<div>
			<h1>Quản lý sinh viên</h1>
			<form className="mb-3">
				<div className="mb-3">
					<label htmlFor="name" class="form-label">
						Tên
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Nhập tên"
					></input>
				</div>
			</form>
		</div>
	)
}
