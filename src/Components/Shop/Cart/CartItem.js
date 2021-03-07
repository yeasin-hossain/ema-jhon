import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
	const { name, price, quantity, key } = props.item;
	return (
		<div className="m-3">
			<Link to={`/product/${key}`}>
				<p>{name}</p>
			</Link>
			<h4>{price}</h4>
			<h4>Quantity:- {quantity}</h4>
			<div>
				<button className="btn btn-info">+</button>
				<input type="number" disabled value={quantity} />
				<button className="btn btn-info">-</button>
			</div>
		</div>
	);
};

export default CartItem;
