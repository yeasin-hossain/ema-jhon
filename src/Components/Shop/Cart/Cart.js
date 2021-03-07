import React, { useContext } from 'react';
import { EmajhonContext } from '../../../DataBase';
import CartItem from './CartItem';
const Cart = () => {
	const { cart } = useContext(EmajhonContext);
	return (
		<div>
			<h1>This Is {cart.length}</h1>
			{cart.map((item) => (
				<CartItem key={item.key} item={item} />
			))}
		</div>
	);
};

export default Cart;
