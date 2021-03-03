import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../contextApi/StateProvider';
import Order from './Order';

import '../styles/Orders.css';

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db
				.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.orderBy('created', 'desc') // desc - return it back in descending order
				.onSnapshot((snapshot) =>
					// gives a real time snap shot of what the db looks like
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, []);
	return (
		<div className='orders'>
			<h1>Your Orders</h1>
			<div className='order_orders'>
				{orders?.map((order, i) => (
					<Order order={order} key={i} />
				))}
			</div>
		</div>
	);
}

export default Orders;
