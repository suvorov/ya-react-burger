import React, { useEffect, useState } from 'react';
import styles from './ingredients-type.module.css';
import IngredientCard from './ingredient-card/ingredient-card';

const IngredientsType = ({
  title,
  ingredients,
}) => {
  return (
    <>
      <h3 className='mmt-10 mb-6'>
        {title}
      </h3>
      <div>
        {ingredients.map((item) => (
          <IngredientCard
            key={item._id}
            ingredient={item}
          />
        ))}
      </div>
    </>
  );
};

export default IngredientsType;