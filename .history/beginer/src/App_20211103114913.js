// import logo from './logo.svg'
import './App.css'
import Footer from './Footer.js'
import Header from './Header'

function App() {
	// const [state, setState] = useState(0)
	const data = {
		firstName: 'nguyen',
		lastName: 'Binh'
	}
	return (
		<div className="App">
			<Header></Header>
			<Footer name="Nguyen thanh binh" />
		</div>
	)
}

export default App
