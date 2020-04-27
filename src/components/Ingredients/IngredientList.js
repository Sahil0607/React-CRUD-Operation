import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  const handleDelete = (id) => {
    // console.log(id);
    props.onRemoveItem(id);
  }
  
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={handleDelete.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
