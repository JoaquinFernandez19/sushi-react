import React from 'react';

export class MenuItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="menu-item">
				<h3>{this.props.name}</h3>
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
