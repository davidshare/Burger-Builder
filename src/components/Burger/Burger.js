import React from 'react';

import '../../css/Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
		.map( ingredientKey=>{
			return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
				return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
			})
		});
	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	)
};

export default burger;
