import React from 'react';
import { useStateValue } from '../contextApi/StateProvider';

import '../styles/Payment.css';

function Payement() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className='payment'>
			<div className='payment_container'>
				{/* Payment section - delivery address */}
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment_address'>
						<p>{user?.email}</p>
					</div>
				</div>
				{/* Payment section - Review Items */}
				<div className='payment_section'></div>
				{/* Payment section - payment method */}
				<div className='payment_section'></div>
			</div>
		</div>
	);
}

export default Payement;
