import React, { useEffect, useState } from 'react';
import styles from './ingredient-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({
  ingredient
}) => {
  return (
    <>
      <img src={ingredient.image} alt={ingredient.name} />
      <p className={styles.price}>{ingredient.price} <CurrencyIcon type="primary" /></p>
      <p>{ingredient.name}</p>
    </>
  );
};

export default IngredientCard;