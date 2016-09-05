import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom'
import App from './components/App'
import Title from './components/Title'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	    <Route path="title/:title" component={Title} />
	</Router>
), document.querySelector('.app'))