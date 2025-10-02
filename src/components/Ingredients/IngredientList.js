import React from "react";

import "./IngredientList.css";

const IngredientList = React.memo(({ ingredients, onRemoveItem }) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {ingredients.map(({ id, title, amount }) => (
          <li key={id} onClick={() => onRemoveItem(id)}>
            <span>{title}</span>
            <span>{amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default IngredientList;
