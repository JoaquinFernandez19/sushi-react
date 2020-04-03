import React from 'react';
import './styles/Header.scss';
export default class Header extends React.Component {
	state = { currentTab: 'Home' };

	changeWindow = (e) => {
		this.setState({ currentTab: e.target.textContent });
		this.props.onChange(e.target.textContent);
	};

	render() {
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
						className={this.state.currentTab === 'Menu' ? activeItem : item}
						onClick={this.changeWindow}>
						Menu
					</p>
					<p
						href="/"
						className={this.state.currentTab === 'Home' ? activeItem : item}
						onClick={this.changeWindow}>
						Home
					</p>
					<p
						href="/"
						className={this.state.currentTab === 'About' ? activeItem : item}
						onClick={this.changeWindow}>
						About
					</p>
				</div>
			</div>
		);
	}
}
