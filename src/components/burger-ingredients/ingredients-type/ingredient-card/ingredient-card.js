import React, { useEffect, useState } from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({
  ingredient
}) => {
  return (
    <div className={styles.card}>
      <Counter count={1} size="default" />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.name}>
        {ingredient.name}
      </p>
    </div>
  );
};

export default IngredientCard;