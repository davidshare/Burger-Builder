import React from 'react';
import '../../../css/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className="Toolbar">
		<DrawerToggle clicked={props.drawerToggleClicked}/>
		<Logo />
		<nav className="Desktop-only">
		<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
