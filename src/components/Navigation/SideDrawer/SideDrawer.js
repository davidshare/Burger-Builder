import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import '../../../css/SideDrawer.css'


const sideDrawer = (props) => {

	const attachClasses = ["SideDrawer", "close"];
	if(props.open){
		attachClasses[1] = "open";
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={ props.closed }/>
			<div className={attachClasses.join(" ")}>
				<div className="SideLogo">
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;
