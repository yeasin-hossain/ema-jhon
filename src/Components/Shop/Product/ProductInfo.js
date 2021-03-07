import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EmajhonContext } from '../../../DataBase';
// import { addToCart } from '../../../utilities/CartFunction';

const ProductInfo = () => {
	const { key } = useParams();
	const { products, addToCart } = useContext(EmajhonContext);
	const product = products.find((pd) => pd.key === key);
	const { name, price } = product;
	return (
		<div>
			<h3>{name}</h3>
			<p>{price}</p>
			<button onClick={() => addToCart(product)} className="btn btn-info">
				Add To Cart
			</button>
		</div>
	);
};

export default ProductInfo;
