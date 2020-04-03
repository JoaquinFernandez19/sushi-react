import React from 'react';

export class MenuItem extends React.Component {
	addOrder() {
		console.log('added new item');
	}
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
