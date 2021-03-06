import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../contextApi/StateProvider';

import '../styles/Checkout.css';

function Checkout() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					className='checkout_ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt=''
				/>
				<div>
					<h3>
						{user ? `Hello, ${user.email.substring(0, user.email.indexOf('@'))}` : ''}
					</h3>
					<h2 className='checkout_title'>Your shopping Basket</h2>
					{basket.map((item, i) => (
						<CheckoutProduct
							key={i}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className='checkout_right'>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
