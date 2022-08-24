import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../../../utils/types';

const IngredientCard = React.memo(({
  ingredient,
  onShowDetails,
}) => {
  const onDetails = useCallback(() => {
    onShowDetails(ingredient);
  }, [ingredient, onShowDetails]);

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

IngredientCard.propTypes = {
  onShowDetails: PropTypes.func.isRequired,
  ingredient: ingredientType.isRequired,
};

export default IngredientCard;