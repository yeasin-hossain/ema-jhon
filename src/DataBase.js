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
			product.quantity = product.quantity + 1;
			console.log(product);
			setCart([...cart]);
		}
	};
	return (
		<EmajhonContext.Provider
			value={{ products, setProducts, cart, setCart, addToCart }}
		>
			{props.children}
		</EmajhonContext.Provider>
	);
};
