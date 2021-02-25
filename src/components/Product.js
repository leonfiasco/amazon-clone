import React from 'react';
import { useStateValue } from '../contextApi/StateProvider';

import '../styles/Product.css';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		//dispatching item to the data layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className='product'>
			<div className='product_info' key={id}>
				<p>{title}</p>
				<p className='product_price'>
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className='product_rating'>
					{Array(rating)
						.fill()
						.map((val, i) => (
							<p>⭐️</p>
						))}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
