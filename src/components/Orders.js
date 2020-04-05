import React from 'react';

//
const Orders = () => {
	return (
		<div className="orders-list">
			<h1>Order now!</h1>
			<div className="ui big inverted message">
				<p>
					<span style={{ color: 'pink' }}>+598</span> 93 450 201
				</p>
			</div>
			<div className="ui big inverted message">
				<p>
					<span style={{ color: 'pink' }}>+598</span> 91 120 400
				</p>
			</div>
			<div className="ui tiny statistic">
				<div className="value">16:00 / 00:00</div>
			</div>
		</div>
	);
};

export default Orders;
