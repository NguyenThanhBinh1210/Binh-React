// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import Footer from './Footer.js'
// import Header from './Header'
import Product from './Product'
import User from './User'

function App() {
	// const [state, setState] = useState(0)
	const [state, setState] = useState(true)
	const data = {
		firstName: 'nguyen',
		lastName: 'Binh'
	}

	return (
		<div className="App">
			<Product />
			{/* <Header></Header> */}
			<User />
			<Footer name={data} age={20} />
			<button onClick={() => setState(state => !state)}>
				Change State
			</button>
			<p>State: {String(state)}</p>
			{state && <Product />}
		</div>
	)
}

export default App