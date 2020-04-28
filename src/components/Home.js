import React from 'react';
import './styles/Home.scss';
import line from './line.png';

const Home = () => {
	return (
		<div className="animated fadeIn home">
			<h1 className="ui header massive inverted custom-header">
				Sushi tradicional
			</h1>

			<div className="home-segment2 ui inverted segment">
				<h1
					className="custom-header2 ui header center aligned massive"
					style={{ color: '#ee9ca7' }}>
					Como si fuera <span className="japan"> Japones</span>
				</h1>
				<img
					src={line}
					className="animated fadeInRight"
					alt="black brush dash"
				/>
			</div>
			<h3
				className="ui header center aligned uruguay animated fadeIn delay-1s"
				id="URUGUAY">
				Pero hecho en Uruguay
			</h3>
		</div>
	);
};

export default Home;
