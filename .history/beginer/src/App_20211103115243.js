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
			<Footer name={data} age={20} />
		</div>
	)
}

export default App
