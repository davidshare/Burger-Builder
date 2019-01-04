import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import '../../css/Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

	state ={
		showSideDrawer: true
	}

	sideDrawerToggleHandler = (prevState) => {
		this.setState({ showSideDrawer: !prevState .showSideDrawer })
	}

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false })
	}

  render(){
		return (
			<Aux>
				<div>
					<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
					<SideDrawer open={this.state.showSideDrawer} closed={ this.sideDrawerClosedHandler }/>
				</div>
				<main className='Content'>
				{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;
