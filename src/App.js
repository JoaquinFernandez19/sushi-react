import React, { useState } from 'react';
import './components/styles/App.scss';
///Components
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
//imgs

const App = () => {
	const [currentWidow, setWindow] = useState('Inicio');

	const changeWindow = (current) => {
		setWindow(current);
	};

	return (
		<div className="site">
			<div className="ui container site-body">
				<Header onChange={changeWindow} />
				{currentWidow === 'Inicio' ? <Home /> : ''}
				{currentWidow === 'Historia' ? <About /> : ''}
				{currentWidow === 'Menu' ? <Menu /> : ''}
			</div>
			<Footer />
		</div>
	);
};

export default App;
