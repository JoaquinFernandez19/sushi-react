import React from 'react';
import './styles/Menu.scss';
import Orders from './Orders';
import MenuItem from './MenuItem';

/////

/////
export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [
				{ name: 'Combo Karate', price: 360 },
				{ name: 'Philadelphia roll', price: 150 },
			],
		};
	}

	onAddOrder = (order) => {
		this.setState({ orders: this.state.orders.concat(order) });
	};

	render() {
		return (
			<div className="menu-container animated fadeIn ">
				<div className="menu-list ">
					<h1>Combos</h1>
					<MenuItem
						name="Combo Karate"
						price={360}
						size={16}
						description="Seleccionado de las mejores piezas."
						onAdd={this.onAddOrder}
					/>
					<MenuItem
						name="Combo Jiroku"
						price={560}
						size={36}
						description="Seleccionado de las mejores piezas."
						onAdd={this.onAddOrder}
					/>
					<MenuItem
						name="Combo Geysha"
						price={860}
						size={50}
						description="Seleccionado de las mejores piezas."
						onAdd={this.onAddOrder}
					/>

					<h1>Rolls</h1>
					<MenuItem
						name="Philadelphia roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
						onAdd={this.onAddOrder}
					/>
					<MenuItem
						name="California roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
						onAdd={this.onAddOrder}
					/>
					<MenuItem
						name="Ebi roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
						onAdd={this.onAddOrder}
					/>
					<h1>Nigiris</h1>
					<MenuItem
						name="Nigiri de salmón"
						price={250}
						size={10}
						description="Pescado y arroz."
						onAdd={this.onAddOrder}
					/>
					<MenuItem
						name="Nigiri de atún"
						price={250}
						size={10}
						description="Pescado y arroz."
						onAdd={this.onAddOrder}
					/>
				</div>
				<Orders orders={this.state.orders} />
			</div>
		);
	}
}

export default Menu;
