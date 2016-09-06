import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom'
import Search from './components/Search'
import Title from './components/Title'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Search} />
	    <Route path="title/:title" component={Title} />
	</Router>
), document.querySelector('.app'))