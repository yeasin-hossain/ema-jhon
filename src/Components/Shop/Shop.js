import React, { useContext } from 'react';
import { EmajhonContext } from '../../DataBase';
import Product from './Product/Product';

const Shop = () => {
	const { products, addToCart } = useContext(EmajhonContext);
	// const { cart, setCart } = useContext(EmajhonContext);
	// const addToCart = (product) => {
	// 	const inCart = cart.filter((pd) => pd.key === product.key);
	// 	console.log(inCart);
	// 	inCart.length === 0 ? setCart([...cart, product]) : console.log('Sorry');
	// };
	return (
		<div>
			{products.map((product) => (
				<Product key={product.key} product={product} cart={addToCart} />
			))}
		</div>
	);
};

export default Shop;
