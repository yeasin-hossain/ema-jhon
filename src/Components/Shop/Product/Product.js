import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
	const { name, price, key, addToCart } = props.product;
	return (
		<div className="w-75 border border-danger m-3 rounded p-3">
			<Link to={`/product/${key}`}>
				<h1>{name}</h1>
			</Link>
			<h1>{price}</h1>
			<button
				className="btn btn-primary"
				onClick={() => props.cart(props.product)}
			>
				Add Cart
			</button>
		</div>
	);
};

export default Product;
