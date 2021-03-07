import React, { useContext } from 'react';
import { EmajhonContext } from '../../DataBase';
import Product from './Product/Product';

const Shop = () => {
	const { products, Cart } = useContext(EmajhonContext);
	return (
		<div className="d-flex flex-column align-items-center">
			{products.map((product) => (
				<Product key={product.key} product={product} cart={Cart} />
			))}
		</div>
	);
};

export default Shop;
