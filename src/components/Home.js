import React from 'react';
import './styles/Home.scss';
import line from './line.png';

export class Home extends React.Component {
	render() {
		return (
			<div className="animated fadeIn home">
				<h1 className="ui header massive inverted custom-header">
					Traditional Sushi
				</h1>

				<div className="home-segment2 ui inverted segment">
					<h1
						className="custom-header2 ui header center aligned massive"
						style={{ color: '#ee9ca7' }}>
						As if you were eating in <span className="japan"> Japan</span>
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
					But made in Uruguay
				</h3>
			</div>
		);
	}
}

export default Home;
