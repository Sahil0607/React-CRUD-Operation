import React from "react";

import "./IngredientList.css";

const IngredientList = React.memo(({ ingredients = [], onRemoveItem }) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {ingredients.map((ing) => {
          const id = ing.id || ing.key || Math.random().toString();
          const title = ing.title || ing.name || "Untitled";
          const amount = ing.amount || ing.qty || "";
          return (
            <li key={id} onClick={() => onRemoveItem(id)}>
              <span>{title}</span>
              <span>{amount}x</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export default IngredientList;
