import React from 'react';
import './components/styles/App.scss';
///Components
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
//imgs

export default class App extends React.Component {
	state = { currentWidow: 'Menu' };

	changeWindow = (current) => {
		this.setState({ currentWidow: current });
	};
	render() {
		return (
			<div className="site">
				<div className="ui container site-body">
					<Header onChange={this.changeWindow} />
					{this.state.currentWidow === 'Home' ? <Home /> : ''}
					{this.state.currentWidow === 'About' ? <About /> : ''}
					{this.state.currentWidow === 'Menu' ? <Menu /> : ''}
				</div>
				<Footer />
			</div>
		);
	}
}
