import React, { useState } from 'react';
import './styles/Header.scss';

const Header = (props) => {
	const [currentTab, setCurrentTab] = useState('Inicio');

	const changeWindow = (e) => {
		setCurrentTab(e.target.textContent);
		props.onChange(e.target.textContent);
	};

	let item = 'item';
	let activeItem = 'item active';
	return (
		<div className="ui Header container">
			<h2
				className="ui center aligned icon header color"
				style={{
					fontFamily: 'Permanent Marker',
					letterSpacing: '2px',
					color: '#3d1f3c',
				}}>
				<i className="leaf icon animated bounceIn color"></i>
				Sushi Leaf
			</h2>
			<div className="ui  three item secondary  pointing menu">
				<p
					href="/"
					className={currentTab === 'Menu' ? activeItem : item}
					onClick={changeWindow}>
					Menu
				</p>
				<p
					href="/"
					className={currentTab === 'Inicio' ? activeItem : item}
					onClick={changeWindow}>
					Inicio
				</p>
				<p
					href="/"
					className={currentTab === 'Historia' ? activeItem : item}
					onClick={changeWindow}>
					Historia
				</p>
			</div>
		</div>
	);
};

export default Header;
