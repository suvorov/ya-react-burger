import React, { useCallback } from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = React.memo(({
  ingredient,
  onShowDetails,
}) => {
  const onDetails = useCallback(() => {
    onShowDetails(ingredient);
  }, []);

  return (
    <div className={styles.card} onClick={onDetails}>
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
});

export default IngredientCard;