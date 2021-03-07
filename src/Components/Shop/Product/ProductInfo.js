import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmajhonContext } from '../../../DataBase';
import fakeData from '../../../fakeData/index';

const ProductInfo = () => {
	const [singleProduct, setSingleProduct] = useState([]);
	const { key } = useParams();
	const { addToCart } = useContext(EmajhonContext);

	useEffect(() => {
		const product = fakeData.find((pd) => pd.key === key);
		setSingleProduct(product);
	}, [key]);
	return (
		<div>
			<h5>{singleProduct.name}</h5>
			<p>$ {singleProduct.price}</p>
			<button onClick={() => addToCart(singleProduct)} className="btn btn-info">
				Add To Cart
			</button>
		</div>
	);
};

export default ProductInfo;
