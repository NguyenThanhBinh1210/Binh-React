import React, { useState } from 'react'
import '../App.scss'
import { useLocation } from 'react-router'
import Student from '../components/Student'
import Input from '../components/Input'

export default function StudentManagement() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [students, setStudents] = useState([])
	const [currentStudent, setCurrentStudent] = useState(null)
	const location = useLocation()
	console.log(location)

	const handleChange = setFunc => value => setFunc(value)

	const handleAdd = event => {
		// event.preventDefault()
		if (name !== '' && age !== '') {
			setStudents(prevStudent => [
				...prevStudent,
				{ id: new Date().toISOString(), name, age }
			])
			setName('')
			setAge('')
		}
	}

	const handleDelete = id => {
		const index = students.findIndex(student => student.id === id)
		const _students = [...students]
		_students.splice(index, 1)
		setStudents(_students)
	}

	const handleStartUpdate = id => {
		const student = students.find(student => student.id === id)
		setCurrentStudent(student)
		setName(student.name)
		setAge(student.age)
	}

	const handleUpdate = () => {
		if (name !== '' && age !== '') {
			const _students = students.map(student => {
				if (student.id === currentStudent.id) {
					return {
						name,
						age,
						id: student.id
					}
				}
				return student
			})
			setStudents(_students)
			handleBack()
		}
	}

	const handleBack = () => {
		setName('')
		setAge('')
		setCurrentStudent(null)
	}

	return (
		<div className="container">
			<h1>Quản lý sinh viên</h1>
			<form className="mb-3">
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
						{currentStudent && (
							<>
								<button
									className="btn btn-primary button__size"
									type="button"
									onClick={handleUpdate}
								>
									Sửa
								</button>
								<button
									className="btn btn-dark button__size"
									type="button"
									onClick={handleBack}
								>
									Trở về
								</button>
							</>
						)}
						{!currentStudent && (
							<button
								className="btn btn-primary"
								type="button"
								onClick={handleAdd}
							>
								Thêm
							</button>
						)}
					</div>
				</div>
			</form>
			<ul className="list-group">
				{students.map(student => (
					<Student
						key={student.id}
						student={student}
						handleDelete={handleDelete}
						handleStartUpdate={handleStartUpdate}
					/>
				))}
			</ul>
		</div>
	)
}
