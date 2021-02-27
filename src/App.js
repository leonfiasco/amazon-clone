import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payement';
import { auth } from './firebase';
import { useStateValue } from './contextApi/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';

const promise = loadStripe(
	'pk_test_51IPQFREDm1qUx19m6g6FFKkCHOe6BoPlAreATylnA8UvZjxZ3ahNqlRS9VAFIh6Al9n75XQPZXocOsVe8gQVVKAI00r8dCASeY'
);

function App() {
	const [{}, dispatch] = useStateValue();

	// only runs once the app component loads
	useEffect(() => {
		// An event listener that will fire once a user logs in/out
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// checks if user just logged in / the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
