import React from 'react';
import './styles/About.scss';
import sushi from './sushi.png';

const About = () => {
	return (
		<div className="ui text container animated fadeIn">
			<h1 className="ui header center aligned massive inverted headerStyle">
				Sobre Nosotros
			</h1>
			<div className="ui segment ">
				<p className="about-p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
					augue, bibendum et metus a, posuere elementum lectus. Aliquam erat
					volutpat. Integer semper quis lacus a hendrerit. Fusce vel pharetra
					dui. Donec a sagittis nibh. Suspendisse potenti. Pellentesque volutpat
					ipsum ac sem volutpat ultricies. Quisque rhoncus dapibus quam, eu
					malesuada magna porta a. Donec eu ligula fermentum, lobortis lorem at,
					interdum quam. Nam non lacinia ex.
				</p>
			</div>
			<div className="ui inverted center aligned segment">
				<span style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
					"Brinder calidad, donde cada detalle marque una diferencia y donde el
					trabajo en equipo sea clave para dar lo mejor."
				</span>
			</div>

			<img src={sushi} alt="sushi table" className="ui image" />

			<div className="ui segment">
				<p className="about-p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
					augue, bibendum et metus a, posuere elementum lectus. Aliquam erat
					volutpat. Integer semper quis lacus a hendrerit. Fusce vel pharetra
					dui. Donec a sagittis nibh.
				</p>
			</div>
			<div className="ui inverted center aligned segment last">
				<span style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
					"Los esperamos a todos cada noche en nuestro local, donde podran vivir
					la experiencia total del sushi gourmet."
				</span>
			</div>
			<button
				className="ui button map-style"
				data-tooltip="Inca 2352 esq Risso">
				<i className="map outline icon big icon-style"></i>
			</button>
		</div>
	);
};

export default About;
