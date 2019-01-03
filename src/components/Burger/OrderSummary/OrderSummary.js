import React from 'react';

import Aux from '../../../hoc/Aux';
import { jsUCFirst } from '../../../helpers/helpers';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients)
		.map(ingredientKey => {
			return <li key={ingredientKey}>{jsUCFirst(ingredientKey)}: {props.ingredients[ingredientKey]}</li>
		})
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>Delicious burger with the following ingredients</p>
			<ul>
				{ ingredientsSummary }
			</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Continue to checkout</p>
			<Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
		</Aux>
	);
};

export default orderSummary;
