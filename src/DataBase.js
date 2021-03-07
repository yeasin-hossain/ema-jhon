import React, { createContext, useEffect, useState } from 'react';
import fakeData from './fakeData/index';
export const EmajhonContext = createContext();

export const EmaJhonProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(
		() =>
			(() => {
				setProducts(fakeData);
			})(),
		[]
	);
	// add to cart
	const addToCart = (product) => {
		const inCart = cart.filter((pd) => pd.key === product.key);
		// inCart.length === 0 ? setCart([...cart, product]) : console.log('Sorry');

		if (inCart.length === 0) {
			product.quantity = 1;
			setCart([...cart, product]);
		} else {
			console.log('already in');
			product.quantity += 1;
			console.log(product);
			setCart([...cart]);
		}
	};
	const cartQuantityIncress = (product) => {
		const inCart = cart.find((pd) => pd.key === product);
		inCart.quantity += 1;
		setCart([...cart]);
	};
	const cartQuantityDecrease = (product) => {
		const inCart = cart.find((pd) => pd.key === product);
		console.log(inCart);
		console.log(product);
		if (inCart.quantity === 1) {
			console.log('under 1');
			cartItemRemove(product);
		} else {
			console.log('upper 1');
			inCart.quantity -= 1;
			setCart([...cart]);
		}
	};
	const cartItemRemove = (product) => {
		console.log(product);
		const inCart = cart.filter((pd) => pd.key !== product);
		setCart(inCart);
		console.log(cart);
	};
	const Cart = {
		cart,
		setCart,
		addToCart,
		cartQuantityIncress,
		cartQuantityDecrease,
		cartItemRemove,
	};
	return (
		<EmajhonContext.Provider value={{ products, setProducts, addToCart, Cart }}>
			{props.children}
		</EmajhonContext.Provider>
	);
};
