import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../contextApi/StateProvider';
import { Link } from 'react-router-dom';

import '../styles/Payment.css';

function Payement() {
	const [{ basket, user }, dispatch] = useStateValue();

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
						<h3>Payment</h3>
					</div>
					<div className='payment_details'></div>
				</div>
			</div>
		</div>
	);
}

export default Payement;
