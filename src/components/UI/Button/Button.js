import React from 'react';

import Classes from '../../../css/Button.css';

const button = (props) => (
	<button
		className={[Classes.Button, props.btnType].join(' ')}
		onClick={ props.clicked}
	>
		{ props.children }
	</button>
);

export default button;
