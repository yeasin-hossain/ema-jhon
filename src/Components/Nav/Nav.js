import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<ul>
				<Link to="/">Home</Link>
				<Link to="/order">Order Info</Link>
			</ul>
		</div>
	);
};

export default Nav;
