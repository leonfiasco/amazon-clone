import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../contextApi/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../contextApi/reducer';
import axios from 'axios';

import '../styles/Payment.css';

function Payement() {
	const [{ basket, user }, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState('');
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generates a stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				// stripe expects a currency subunits e.g pence for pounds
				url: `payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		// stripe logic goes here
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardSecret(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			}
				// destructuring the response to get paymentIntent
				// paymentIntent = paymentConfirmation
				.then(({ paymentIntent }) => {
					setSucceeded(true);
					setError(null);
					setProcessing(false);

					history.replaceState('/orders');
				}),
		});
	};

	const handleChange = (e) => {
		// listen for changes in CardElement
		// and displays any errors as the customer type their card details
		setDisabled(e.empty);
		setError(e.error ? e.error.messsage : '');
	};

	return (
		<div className='payment'>
			<div className='payment_container'>
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				{/* Payment section - delivery address */}
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment_address'>
						<p>{user?.email}</p>
						<p>130 Leonard Drive</p>
						<p>London, Uk</p>
					</div>
				</div>
				{/* Payment section - Review Items */}
				<div className='payment_section'>
					<div className='payment_tile'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment_items'>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* Payment section - payment method */}
				<div className='payment_section'>
					<div className='payment_tile'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment_details'>
						{/* stripe will go here */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className='payment_priceContainer'>
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'£'}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payement;
