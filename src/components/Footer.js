import React from 'react';
import './styles/Footer.scss';
const Footer = () => {
	return (
		<div className="ui  center aligned segment fixed inverted footer">
			<h3 className="ui header ">Made with love to practice React</h3>
			<i
				className="heart icon animated infinite pulse"
				style={{ color: 'red' }}></i>
		</div>
	);
};

export default Footer;
