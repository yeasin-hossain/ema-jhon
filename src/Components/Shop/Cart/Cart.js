import React, { useContext } from 'react';
import { EmajhonContext } from '../../../DataBase';
import CartItem from './CartItem';
const Cart = () => {
	const { Cart } = useContext(EmajhonContext);
	const { cart } = Cart;
	return (
		<div className="sticky-top border p-3">
			<h1>Selected Item {cart.length}</h1>
			<h6>
				Total Amount $ $
				{cart.reduce((total, price) => total + price.price * price.quantity, 0)}
			</h6>
			<div style={{ overflow: 'auto', height: '90vh' }}>
				{cart.map((item) => (
					<CartItem key={item.key} item={item} cart={Cart} />
				))}
			</div>
		</div>
	);
};

export default Cart;
