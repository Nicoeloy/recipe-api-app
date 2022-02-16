import React from "react";
import style from '../recipe.module.css'

const RecipesList = ({ title, calories, image, ingredients, time }) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <div className={style.info}>
        <p>{Math.round(calories)} Kcal</p>
        <p>{time != 0 ? time + ' mins' : ''}</p>
      </div>
      <h2>Recipe</h2>
      <ul>
        {ingredients.map(ingredient =>(
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="recipe"/>
    </div>
  );
}

export default RecipesList;
