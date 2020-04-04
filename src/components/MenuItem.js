import React from 'react';

export class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			price: this.props.price,
			quantity: null,
		};
	}

	addOrder = () => {
		let order = {
			name: this.state.name,
			price: this.state.price,
		};

		this.props.onAdd(order);
	};

	render() {
		return (
			<div className="menu-item">
				<h3>
					{this.props.name}
					<i onClick={this.addOrder} className="ui link plus  circle icon"></i>
				</h3>
				<p>
					<strong>{this.props.size} piezas</strong>
				</p>
				<p>{this.props.description} </p>
				<span className="price">${this.props.price} </span>
			</div>
		);
	}
}

export default MenuItem;
