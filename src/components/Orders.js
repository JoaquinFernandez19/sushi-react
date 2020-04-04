import React from 'react';
import OrderItem from './OrderItem';

//
export class Orders extends React.Component {
	constructor(props) {
		super();
		this.state = { list: props.orders };
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.orders !== prevState.list) {
			return { list: nextProps.orders };
		} else return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.orders !== this.props.orders) {
			//Perform some operation here
			this.setState({ list: this.props.orders });
		}
	}

	render() {
		return (
			<div className="orders-list">
				<h1>Orders</h1>

				{this.state.list.map((item) => (
					<OrderItem name={item.name} key={item.name} price={item.price} />
				))}
				<div className="ui vertical animated button buy-btn">
					<div className="hidden content">Delivery</div>
					<div className="visible content">
						<i className="shop icon"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Orders;
