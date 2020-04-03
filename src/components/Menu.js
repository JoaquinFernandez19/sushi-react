import React from 'react';
import Orders from './Orders';
import MenuItem from './MenuItem';
import './styles/Menu.scss';
/////

/////
export class Menu extends React.Component {
	render() {
		return (
			<div className="menu-container ">
				<div className="menu-list animated bounceInLeft ">
					<h1>Combos</h1>
					<MenuItem
						name="Combo Karate"
						price={360}
						size={16}
						description="Seleccionado de las mejores piezas."
					/>
					<MenuItem
						name="Combo Jiroku"
						price={560}
						size={36}
						description="Seleccionado de las mejores piezas."
					/>
					<MenuItem
						name="Combo Geysha"
						price={860}
						size={50}
						description="Seleccionado de las mejores piezas."
					/>

					<h1>Rolls</h1>
					<MenuItem
						name="Philadelphia roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
					/>
					<MenuItem
						name="California roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
					/>
					<MenuItem
						name="Ebi roll"
						price={150}
						size={9}
						description="Pescado, arroz y plantita."
					/>
					<h1>Nigiris</h1>
					<MenuItem
						name="Nigiri de salmón"
						price={250}
						size={10}
						description="Pescado y arroz."
					/>
					<MenuItem
						name="Nigiri de atún"
						price={250}
						size={10}
						description="Pescado y arroz."
					/>
				</div>
				<Orders />
			</div>
		);
	}
}

export default Menu;
