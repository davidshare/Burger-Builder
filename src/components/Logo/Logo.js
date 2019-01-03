import React from 'react';

import BurgerLogo from '../../assets/images/burger-logo.png';
import '../../css/Logo.css';

const logo = (props) => (
	<div className="Logo">
		<img src={ BurgerLogo } alt="Burger logo"/>
	</div>
);

export default logo;
