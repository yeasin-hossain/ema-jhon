import React, { useContext } from 'react';
import { EmajhonContext } from '../../DataBase';
import fakeData from '../../fakeData/index';
const Search = () => {
	const { products, setProducts } = useContext(EmajhonContext);
	const searchItem = (itemName) => {
		const selectItem = products.map(
			(pd) => pd.name.toLowerCase().search(itemName.toLowerCase()) > 0 && pd
		);
		const searchProducts = selectItem.filter((item) => item !== false);
		setProducts(searchProducts);
		itemName.length === 0 && setProducts(fakeData);
	};
	return (
		<div className="sticky-top" style={{ top: '10px' }}>
			<input
				type="text"
				className="form-control w-25 d-block m-auto"
				placeholder="Camera,nikon.."
				onChange={(e) => searchItem(e.target.value)}
			/>
		</div>
	);
};

export default Search;
