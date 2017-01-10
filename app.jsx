import React from 'react';
import {render} from 'react-dom';
import {withRouter ,Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import Store from './store.js';
// import Action from 'action.js'

import Login from './login.jsx'



const App = (props)=>{
	return(
		<div>
			hello world
			{props.children}
		</div>
		)
}




render(
	<Provider store={Store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Login} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root')
)