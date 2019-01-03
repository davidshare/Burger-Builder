import React from 'react';

import '../../../css/NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className="NavigationItems">
		<NavigationItem link="/" active>Home</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;
