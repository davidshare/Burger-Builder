import React from 'react';

import '../../css/Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map( ingredientKey=>{
			return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
				return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
			})
		}).reduce((total, current) => {
			return total.concat(current)
		}, []);
		if(transformedIngredients.length === 0 ){
			transformedIngredients = <p>Please start adding ingredients!</p>
		}
	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	)
};

export default burger;
