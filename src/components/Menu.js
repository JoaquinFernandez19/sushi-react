import React from 'react';
import './styles/Menu.scss';
import Orders from './Orders';
import MenuItem from './MenuItem';
import menu from './data/menu.json';
/////

/////
const Menu = () => {
	const menuItemsCombo = menu.map((item, index) => {
		if (index === 0 || index === 1 || index === 2) {
			return (
				<MenuItem
					name={item.name}
					price={item.price}
					size={item.size}
					description={item.description}
				/>
			);
		}
	});
	const menuItemsRolls = menu.map((item, index) => {
		if (index === 3 || index === 4 || index === 5) {
			return (
				<MenuItem
					name={item.name}
					price={item.price}
					size={item.size}
					description={item.description}
				/>
			);
		}
	});
	const menuItemsNigiri = menu.map((item, index) => {
		if (index === 6 || index === 7) {
			return (
				<MenuItem
					name={item.name}
					price={item.price}
					size={item.size}
					description={item.description}
				/>
			);
		}
	});

	return (
		<div className="menu-container animated fadeIn ">
			<div className="menu-list ">
				<h1>Combos</h1>
				{menuItemsCombo}
				<h1>Rolls</h1>
				{menuItemsRolls}
				<h1>Nigiris</h1>
				{menuItemsNigiri}
			</div>
			<Orders />
		</div>
	);
};

export default Menu;
