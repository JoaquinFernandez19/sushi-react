import React from 'react';

class OrderItem extends React.Component {
	render() {
		return (
			<div key={this.props.key} className="order-item">
				<p>{this.props.name}</p>
				<span>{this.props.size}</span>
				<span class="price">${this.props.price}</span>
			</div>
		);
	}
}

export default OrderItem;
