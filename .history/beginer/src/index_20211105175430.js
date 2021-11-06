import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Service from './components/service'

const Routing = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
				<Route path="/service" component={Service} />
			</Switch>
			<Footer />
		</Router>
	)
}

// Chứa tất cả mợi thứ rồi import vào index.html
ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
