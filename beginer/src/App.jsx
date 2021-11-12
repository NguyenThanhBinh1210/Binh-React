import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/Counter/Counter'
import Profile from './components/Profile/Profile'
// import Register from './pages/Register'
// import StudentManagement from './pages/StudentManagement'
// import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer.js'
// import Home from './pages/Home'
// import Profile from './pages/profile/Profile'
// import NotFound from './pages/profile/NotFound'

// export const path = {
// 	home: '/',
// 	register: 'register/',
// 	student: 'student',
// 	profile: 'profile/*'
// }

function App() {
	return (
		<div className="App">
			<Counter />
			<Profile />
			{/* <Header />
			<Routes>
				<Route path={path.home} exact element={<Home />} />
				<Route path={path.register} element={<Register />} />
				<Route path={path.student} element={<StudentManagement />} />
				<Route path={path.profile} element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer name="Thanh binh" /> */}
		</div>
	)
}

export default App
