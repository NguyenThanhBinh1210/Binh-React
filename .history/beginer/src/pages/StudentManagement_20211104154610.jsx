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
				<div className="mb-3">
					<label htmlFor="age" class="form-label">
						Tuổi
					</label>
					<input
						type="text"
						className="form-control"
						id="age"
						placeholder="Nhập tuổi"
					></input>
					<div>
						<button className="btn btn-primary" type="submit">
							Thêm
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
