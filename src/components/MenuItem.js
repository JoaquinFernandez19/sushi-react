import React from 'react';

const MenuItem = (props) => {
	return (
		<div className="menu-item">
			<h3>{props.name}</h3>
			<p>
				<strong>{props.size} piezas</strong>
			</p>
			<p>{props.description} </p>
			<span className="price">${props.price} </span>
		</div>
	);
};

export default MenuItem;
