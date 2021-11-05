import React, { useState } from 'react'
import '../App.scss'
import Student from '../components/Student'
import Input from '../components/Input'

export default function StudentManagement() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [student, setStudent] = useState([])
	const [currentStudent, setCurrentStudent] = useState(null)

	const handleChange = setFunc => value => setFunc(value)

	const handleSubmit = event => {
		event.preventDefault()
		if (name !== '' && age !== '') {
			setStudent(prevStudent => [
				...prevStudent,
				{ id: new Date().toISOString(), name, age }
			])
			setName('')
			setAge('')
		}
	}

	const handleDelete = id => {
		const index = student.findIndex(student => student.id === id)
		const _student = [...student]
		_student.splice(index, 1)
		setStudent(_student)
	}

	const handleUpdate = id => {
		const student = student.find(student => student.id === id)
		setCurrentStudent(student)
	}

	return (
		<div className="container">
			<h1>Quản lý sinh viên</h1>
			<form className="mb-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" class="form-label">
						Tên
					</label>
					<Input
						type="text"
						className="form-control"
						id="name"
						placeholder="Nhập tên"
						value={name}
						onChange={handleChange(setName)}
					></Input>
				</div>
				<div className="mb-3">
					<label htmlFor="age" class="form-label">
						Tuổi
					</label>
					<Input
						type="number"
						className="form-control"
						id="age"
						placeholder="Nhập tuổi"
						value={age}
						onChange={handleChange(setAge)}
					></Input>
					<div className="mt-3 button">
						<button className="btn btn-primary" type="submit">
							Thêm
						</button>
					</div>
				</div>
			</form>
			<ul className="list-group">
				{student.map(student => (
					<Student
						key={student.id}
						student={student}
						handleDelete={handleDelete}
					/>
				))}
			</ul>
		</div>
	)
}
