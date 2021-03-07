import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, cart }) => {
	const { name, price, key, img } = product;
	const { addToCart } = cart;
	return (
		<div className="w-75 border border-danger m-3 rounded p-3">
			<img src={img} alt="" />
			<Link to={`/product/${key}`}>
				<h4>{name}</h4>
			</Link>
			<h1>{price}</h1>
			<button className="btn btn-primary" onClick={() => addToCart(product)}>
				Add Cart
			</button>
		</div>
	);
};

export default Product;
