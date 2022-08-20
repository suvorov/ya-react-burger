import React, { useEffect, useState } from 'react';
import styles from './ingredients-type.module.css';
import IngredientCard from './ingredient-card/ingredient-card';

const IngredientsType = ({
  title,
  ingredients,
}) => {
  return (
    <>
      <div className='text text_type_main-medium mb-6 mt-10'>
        {title}
      </div>
      <div className={styles.container}>
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