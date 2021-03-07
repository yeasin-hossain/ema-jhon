import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, cart }) => {
	const { name, price, quantity, key } = item;
	const { cartQuantityIncress, cartItemRemove, cartQuantityDecrease } = cart;
	return (
		<div className="m-3">
			<Link to={`/product/${key}`}>
				<p>{name}</p>
			</Link>
			<h4>{price}</h4>
			<h4>Quantity:- {quantity}</h4>
			<div className="d-flex">
				<button
					className="btn btn-info m-2"
					onClick={() => cartQuantityIncress(key)}
				>
					+
				</button>
				<input
					type="number"
					disabled
					value={quantity}
					className="form-control w-25 m-2"
				/>
				<button
					className="btn btn-info m-2"
					onClick={() => cartQuantityDecrease(key)}
				>
					-
				</button>
			</div>
			<button className="btn btn-danger" onClick={() => cartItemRemove(key)}>
				Remove
			</button>
		</div>
	);
};

export default CartItem;
