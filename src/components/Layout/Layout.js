import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import '../../css/Layout.css'

const layout = (props) => (
  <Aux>
		<div>
			<Toolbar />
		</div>
    <main className='Content'>
    {props.children}
    </main>
  </Aux>
);

export default layout;
