import React from 'react';
import './styles/About.scss';
import sushi from './sushi.png';

export class About extends React.Component {
	render() {
		return (
			<div className="ui text container animated fadeIn">
				<h1 className="ui header center aligned massive inverted headerStyle">
					Sobre Nosotros
				</h1>
				<div className="ui segment ">
					<p className="about-p">
						Sushi Leaf es un restaurante ubicado en Montevideo, Uruguay, fundado
						en el año 2020, por Joaquin Fernandez, uno de los sushiMakers más
						reconocidos de la región. Luego de estudiar en la Sushi Academy de
						Japón, volvió a su país de nacimiento para empezar a trabajar en el
						BasicSenshin, un restaurante conocido de la zona, donde fue
						rapidamente reconocido por su estilo y su gran cuidado del detalle.
					</p>
				</div>
				<div className="ui inverted center aligned segment">
					<span style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
						"Brinder calidad, donde cada detalle marque una diferencia y donde
						el trabajo en equipo sea clave para dar lo mejor."
					</span>
				</div>

				<img src={sushi} alt="sushi table" className="ui image" />

				<div className="ui segment">
					<p className="about-p">
						Hoy en día Sushi Leaf cuenta con Joaquin, junto a otros habilidosos
						chefs como Pedro, Roberto y Milena, 2 mozos siendo estos Judith y
						Marcos y por último pero no menos importante nuestro delivery
						Patricio.
					</p>
				</div>
				<div className="ui inverted center aligned segment last">
					<span style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
						"Los esperamos a todos cada noche en nuestro local, donde podran
						vivir la experiencia total del sushi gourmet."
					</span>
				</div>
				<button
					className="ui button map-style"
					data-tooltip="Inca 2352 esq Risso">
					<i className="map outline icon big icon-style"></i>
				</button>
			</div>
		);
	}
}

export default About;
